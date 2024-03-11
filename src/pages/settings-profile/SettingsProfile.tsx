import React, { useEffect, useState } from "react";
import {
  SettingsWrapper,
  AdminImage,
  InputsBox,
  LabelStyled,
  ItemInputs,
  ButtonDetails,
} from "./settingsProfile.styles";
import adminImage from "../../assets/adminImage.png";
import { Search } from "../../components/search/Search";
import useLocalStorage from "src/hooks/useLocalStorage";
import { SearchBox } from "src/components/searchPanel/SearchPanel.styles";
import { updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import Swal from "sweetalert2";

export const SettingsProfile: React.FC = () => {
  const { getUserInfoFromLocalStorage } = useLocalStorage();
  const [userInf, setUserInf] = useState<User | null>();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInf(user);
      } else {
        Swal.fire({
          title: "Пользователь вышел из системы",
          icon: "error",
        });
      }
    });
  }, [auth]);

  const [userData, setUserData] = useState<{
    email: string;
    userName: string;
  } | null>(null);
  const [newData, setNewUserData] = useState<{
    email: string;
    userName: string;
    password: string;
  }>({ email: "", userName: "", password: "" });
  useEffect(() => {
    const fetchedUserData = getUserInfoFromLocalStorage();
    setUserData(fetchedUserData);
  }, []);

  const handleUserNameChange = (value: string) => {
    setNewUserData((prevData) => ({ ...prevData, userName: value }));
  };

  const handleEmailChange = (value: string) => {
    setNewUserData((prevData) => ({ ...prevData, email: value }));
  };

  const handlePasswordChange = (value: string) => {
    setNewUserData((prevData) => ({ ...prevData, password: value }));
  };

  // оптимизировать эту колбасу
  const updateUser = () => {
    if (newData.userName !== "") {
      const newDisplayName = newData.userName;
      if (userInf) {
        updateProfile(userInf, {
          displayName: newDisplayName,
        })
          .then(() => {
            Swal.fire({
              title: "DisplayName успешно обновлен.",
              icon: "success",
            });
          })
          .catch((error: any) => {
            Swal.fire({
              title: "Ошибка при обновлении DisplayName:" + error.message,
              icon: "error",
            });
          });
      }
    }
    if (newData.email !== "") {
      const newEmail = newData.email;
      if (userInf) {
        updateEmail(userInf, newEmail)
          .then(() => {
            Swal.fire({
              title: "Email успешно обновлен",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Ошибка при обновлении email:" + error.message,
              icon: "error",
            });
          });
      }
    }
    if (newData.password !== "") {
      const newPassword = newData.password;
      if (userInf) {
        updatePassword(userInf, newPassword)
          .then(() => {
            Swal.fire({
              title: "Пароль успешно обновлен",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Ошибка при обновлении пароля:" + error.message,
              icon: "error",
            });
          });
      }
    }
  };

  return (
    <SettingsWrapper>
      <AdminImage src={adminImage} />
      <InputsBox>
        <ItemInputs>
          <LabelStyled>Email</LabelStyled>
          <SearchBox>
            <Search
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder={userData ? userData.email : ""}
            />
          </SearchBox>
        </ItemInputs>
        <ItemInputs>
          <LabelStyled>Имя пользователя</LabelStyled>
          <SearchBox>
            <Search
              onChange={(e) => handleUserNameChange(e.target.value)}
              placeholder={userData ? userData.userName : ""}
            />
          </SearchBox>
        </ItemInputs>
        <ItemInputs>
          <LabelStyled>Пароль</LabelStyled>
          <SearchBox>
            <Search
              onChange={(e) => handlePasswordChange(e.target.value)}
              placeholder="********"
            />
          </SearchBox>
        </ItemInputs>
        <ButtonDetails onClick={() => updateUser()}>Сохранить</ButtonDetails>
      </InputsBox>
    </SettingsWrapper>
  );
};
