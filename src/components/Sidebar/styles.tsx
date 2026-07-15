import styled from "styled-components";
import { BORDER_COLOR, DARKER_BG_COLOR } from "../../UIKit";

export const Aside = styled.aside<{ $small?: boolean; $darker?: boolean }>`
  height: calc(100vh);
  overflow: hidden;
  text-wrap: nowrap;
  -webkit-user-select: none;
  width: ${({ $small }) => ($small ? 200 : 300)}px;
  border-right: solid 1px ${BORDER_COLOR};
  background-color: ${({ $darker }) => ($darker ? DARKER_BG_COLOR : "inherit")};

  & ul {
    list-style: none;
  }
`;

export const AsideLabel = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  border-bottom: solid 1px ${BORDER_COLOR};

  & > label {
    font-size: 16px;
  }
`;

export const AsideContent = styled.div`
  /*padding: 10px;*/
`;
