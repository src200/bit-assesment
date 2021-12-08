import { ModalContext } from "./context";
import { useContext } from "react";

export const useModalContext = () => useContext(ModalContext);
export { ModalContext };