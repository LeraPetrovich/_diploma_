import { useDispatch } from "react-redux";
import { setUserParamSlice } from "src/store/reduser/setUserParamsSlice";
import useSearchUsers from "./useSearhUsers";

const useParams = () => {
  const dispatch = useDispatch();
  const { filtUsers } = useSearchUsers();

  const getParams = async () => {
    const helthStatus = filtUsers.map((el) => ({
      id: el.id,
      temperature: el.temperature,
      onHead: el.onHead,
      pressure: el.pressure,
    }));
    await dispatch(setUserParamSlice(helthStatus));
  };

  return { getParams };
};

export default useParams;
