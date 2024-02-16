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
// const decodeAuthToken = (token: string): DecodedToken | null => {
//   try {
//     // Извлекаем часть полезной нагрузки (payload), пропуская 'v2.local.'
//     const payloadBase64 = token.split('.')[2];

//     // Очищаем строку от нежелательных символов
//     const cleanedPayloadBase64 = payloadBase64.replace(/-/g, '+').replace(/_/g, '/').replace(/%3D/g, '=');

//     // Декодируем base64 и парсим JSON
//     const decodedPayload = JSON.parse(atob(cleanedPayloadBase64));

//     // Проверяем, что полезная нагрузка содержит поле 'exp'
//     if (decodedPayload && typeof decodedPayload.exp === 'number') {
//       return { exp: decodedPayload.exp };
//     } else {
//       console.error("Invalid payload structure:", decodedPayload);
//       return null;
//     }
//   } catch (error) {
//     console.error("Error decoding auth token:", error);
//     return null;
//   }
// };
