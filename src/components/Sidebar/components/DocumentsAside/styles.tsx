import styled from "styled-components";
import { BORDER_COLOR } from "../../../../UIKit";

export const NoteRow = styled.li<{ $selected: boolean }>`
  padding: 5px 10px;
  border-bottom: solid 1px ${BORDER_COLOR};
  background-color: ${({ $selected }) => ($selected ? "#ffffff11" : "none")};
`;
