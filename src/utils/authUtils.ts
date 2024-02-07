import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

interface DecodedToken {
  exp: number;
}

const cookies = new Cookies();

export const checkTokenExpiration = (): boolean => {
  const authToken: string | undefined = cookies.get("authToken");

  if (authToken) {
    const decodedToken: DecodedToken | null = decodeAuthToken(authToken);

    if (decodedToken && decodedToken.exp * 1000 < Date.now()) {
      return true;
    }
  }

  return false;
};

const decodeAuthToken = (token: string): DecodedToken | null => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Error decoding auth token:", error);
    return null;
  }
};
