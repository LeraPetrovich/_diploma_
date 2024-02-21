import { items } from "src/constants/main.mocks";
import { useSelector } from "react-redux";
import { IRootState } from "src/store";
import { useDispatch } from "react-redux";
import { setUserItemsSlice } from "src/store/reduser/setUsersSlice";
import { IItems } from "./types";

const useSearchUsers = () => {
  const filterFields: (keyof Partial<IItems>)[] = ["name", "id"];
  const inputValue = useSelector(
    (state: IRootState) => state.searchReduser.search
  );
  const dispatch = useDispatch();

  const lowerCasedInput = inputValue.toLowerCase();

  const setUserItems = () => {
    const filtUsers = items.filter((item) => {
      return filterFields.some((field) => {
        const fieldValue = String(item[field]).toLowerCase();
        return fieldValue.includes(lowerCasedInput);
      });
    });

    dispatch(setUserItemsSlice(filtUsers));
  };

  return { setUserItems };
};

export default useSearchUsers;
