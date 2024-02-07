import { useDispatch, useSelector } from "react-redux";
import { setUserItemSlice } from "src/store/reduser/setUserItemsSlice";
import { items } from "src/constants/main.mocks";
import { IRootState } from "src/store";

const useData = () => {
  const dispatch = useDispatch();

  const getData = () => {
    const helthStatus = items.map((el) => ({
      temperature: el.temperature,
      onHead: el.onHead,
      pressure: el.pressure,
    }));
    console.log(dispatch(setUserItemSlice(helthStatus)));
    dispatch(setUserItemSlice(helthStatus));
  };

  // const useItems = useSelector((state: IRootState) => state.useItems);
  // console.log(useItems);

  return { getData };
};

export default useData;
