import styled from "styled-components";

export const IconBtn = styled.button`
  width: 20px;
  height: 20px;
  line-height: 1;
  border-radius: 3px;
  border: none;
  padding: 0;
  background: none;
  opacity: 0.7;

  &: hover {
    opacity: 1;
  }

  & > svg {
    color: #aaa;
    margin: auto;
    font-size: 16px;
  }
`;
