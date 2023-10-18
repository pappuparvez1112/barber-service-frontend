import { decodedToken } from "@/app/utils/jwt";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "@/app/utils/local-storage";
import { authKey } from "@/constant/storageKey";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};
export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};
export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
