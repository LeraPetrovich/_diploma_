import { FunctionComponent, useEffect, useState } from "react";
//store
import { useDispatch } from "react-redux";
import { setSearchSlice } from "src/store/reduser/searchReduserSlice";
import { setUserItemSlice } from "src/store/reduser/setUsersSlice";
//components
import { MainContainer, UserItemBox } from "./Main.styles";
import { Search, UserItem } from "../../components";
import { Link } from "react-router-dom";
//hooks
import useParams from "../../hooks/useParams";
import { debounce } from "lodash";
import useSearchUsers from "src/hooks/useSearhUsers";

//type
import type { UserItemType } from "src/store/reduser/setUsersSlice";

export const Main: FunctionComponent = () => {
  const { getParams } = useParams();
  const dispatch = useDispatch();
  const { filtUsers } = useSearchUsers();

  const [nameUser, setNameUser] = useState<string>("");

  useEffect(() => {
    getParams();
  }, []);

  useEffect(() => {
    dispatch(setSearchSlice(nameUser));
  }, [nameUser]);

  const handleInput = debounce((e) => setNameUser(e.target.value), 500);

  const getUserItemInf = (data: UserItemType) => {
    dispatch(setUserItemSlice(data));
  };

  return (
    <MainContainer>
      <Search onChange={handleInput} />
      <UserItemBox>
        {filtUsers.length > 0 ? (
          filtUsers.map((el) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`${el.id}`}
                key={el.id}
              >
                <UserItem
                  onClick={() => getUserItemInf(el)}
                  id={el.id}
                  name={el.name}
                />
              </Link>
            );
          })
        ) : (
          <p>Пользователь не был найден</p>
        )}
      </UserItemBox>
    </MainContainer>
  );
};
