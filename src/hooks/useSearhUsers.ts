import { items } from "src/constants/main.mocks";
import { useSelector } from "react-redux";
import { IRootState } from "src/store";
interface IItems {
  name: string;
  id?: string;
  date?: string;
  place: string;
  generalState: string;
}

const useSearchUsers = () => {
  const filterFields: (keyof Partial<IItems>)[] = ["name", "id"];
  const inputValue = useSelector(
    (state: IRootState) => state.searchReduser.search
  );

  const lowerCasedInput = inputValue.toLowerCase();

  const filtUsers = items.filter((item) => {
    return filterFields.some((field) => {
      const fieldValue = String(item[field]).toLowerCase();
      return fieldValue.includes(lowerCasedInput);
    });
  });

  return { filtUsers };
};

export default useSearchUsers;
