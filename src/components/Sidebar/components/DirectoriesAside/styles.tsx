import styled from "styled-components";

interface IItemProps {
  $selected: boolean;
}

export const Item = styled.li<IItemProps>`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 3px 0 3px 21px;
  position: relative;

  background-color: ${({ $selected }) => ($selected ? "#ffffff11" : "inherit")};
`;
