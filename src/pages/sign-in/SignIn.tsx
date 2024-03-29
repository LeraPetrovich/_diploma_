import { FunctionComponent, useContext, useRef, useEffect } from "react";
import {
  SignInWrapper,
  SignInContent,
  Title,
  Form,
  FormBlock,
  LabelForm,
  InputForm,
  ButtonForm,
  TitleContent,
  Image,
  LogoContent,
  TextLogo,
  Box,
  ImageLogo,
} from "./SignIn.styles";
// import { AuthContext } from "../../provider";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseSetup";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import imageUser from "../../assets/Vector.svg";
import imageCar from "../../assets/la_truck-moving.svg";
import useLocalStorage from "src/hooks/useLocalStorage";
// import { updateProfile } from "firebase/auth";

export const SignIn: FunctionComponent = () => {
  // const user = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { saveUserInfoToLocalStorage } = useLocalStorage();

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value
      );
      const user = userCredential.user;
      
      cookies.set("authToken", await user.getIdToken(), { path: "/" });
      navigate("/");
      //тупое решение по смене displayName
      // const newDisplayName = "Валерия Петрович";
      // updateProfile(user, {
      //   displayName: newDisplayName,
      // })
      //   .then(() => {
      //     console.log("DisplayName успешно обновлен.");
      //   })
      //   .catch((error: any) => {
      //     console.error("Ошибка при обновлении DisplayName:", error);
      //   });
      if (user !== null) {
        saveUserInfoToLocalStorage(user.email, user.displayName);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const signOut = async () => {
  //   await auth.signOut();
  // };

  return (
    <Box>
      <LogoContent>
        <TextLogo>TestCar</TextLogo>
        <ImageLogo src={imageCar} />
      </LogoContent>
      <SignInWrapper>
        <SignInContent>
          <TitleContent>
            <Title>Администратор</Title>
            <Image src={imageUser} />
          </TitleContent>
          <Form>
            <FormBlock>
              <LabelForm htmlFor="login">Email:</LabelForm>
              <InputForm ref={emailRef} type="email" id="login" name="login" />
            </FormBlock>
            <FormBlock>
              <LabelForm htmlFor="password">Password:</LabelForm>
              <InputForm
                ref={passwordRef}
                type="password"
                id="password"
                name="password"
              />
            </FormBlock>
            <ButtonForm onClick={signIn} type="button">
              Войти
            </ButtonForm>
          </Form>
        </SignInContent>
      </SignInWrapper>
    </Box>
  );
};
