import { IconBtn } from "./styles";

interface IProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}

export const IconButton = ({ children, onClick }: IProps) => {
  return <IconBtn onClick={onClick}>{children}</IconBtn>;
};
