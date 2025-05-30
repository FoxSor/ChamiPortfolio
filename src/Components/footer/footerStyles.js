import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterContainer = styled.footer`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  background-color: #222;
  align-items: center;
  background: #f3eded 0% 0% no-repeat padding-box;
  border-radius: 8px;
`;

export const IconLink = styled.a`
  text-decoration: none;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #707070;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #61dafb;
  }
`;
