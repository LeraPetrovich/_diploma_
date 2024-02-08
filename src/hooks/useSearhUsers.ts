import { items } from "src/constants/main.mocks";
import { useSelector } from "react-redux";
import { IRootState } from "src/store";

const useSearchUsers = () => {
  const inputValue = useSelector(
    (state: IRootState) => state.searchReduser.search
  );

  const filtUsers = items.filter((e) => {
    return e.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return { filtUsers };
};

export default useSearchUsers;
