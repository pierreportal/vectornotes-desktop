import styled from "styled-components";
import { Row } from "../../../../UIKit";

export const SectionItems = styled.ul`
  opacity: 0.7;
  padding-left: 21px;
`;

export const SectionHeader = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  padding: 3px 0 3px 21px;
`;

export const SectionActions = styled(Row)`
  align-items: center;
  position: absolute;
  right: 10px;
  gap: 5px;
`;
