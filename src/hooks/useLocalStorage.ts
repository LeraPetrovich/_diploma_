const useLocalStorage = () => {
  const saveUserInfoToLocalStorage = (
    email: string | null,
    userName: string | null
  ) => {
    const userInfo = { email, userName };
    const userInfoString = JSON.stringify(userInfo);
    localStorage.setItem("userInfo", userInfoString);
  };

  const getUserInfoFromLocalStorage = () => {
    const userInfoString = localStorage.getItem("userInfo");
    if (userInfoString) {
      return JSON.parse(userInfoString);
    }
    return null;
  };
  return { saveUserInfoToLocalStorage, getUserInfoFromLocalStorage };
};

export default useLocalStorage;
