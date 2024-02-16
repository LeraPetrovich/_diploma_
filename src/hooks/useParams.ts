import { useDispatch } from "react-redux";
import { setUserParamSlice } from "src/store/reduser/setUserParamsSlice";
import { useSelector } from "react-redux";
import { IRootState } from "src/store";

const useParams = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: IRootState) => state.userItem.userItems);
  const getParams = () => {
    const healthStatus = users.map((el) => ({
      id: el.id,
      temperature: el.temperature,
      onHead: el.onHead,
      pressure: el.pressure,
    }));
    dispatch(setUserParamSlice(healthStatus));
  };

  return { getParams };
};

export default useParams;
