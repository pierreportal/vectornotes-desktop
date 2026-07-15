import { useContext } from "react";
import { AppContext } from "../Wrapper";

export const useAppContext = () => {
  return useContext(AppContext);
};
