import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 12%;
  min-height: 130vh;
  padding: 46px 14px 0px 14px;
  flex-shrink: 0;
`;
export const LogoCotainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 64px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 120px;
    height: 24px;
  }
`;
export const MainNavBar = styled.div`
  width: 100%;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;
export const NavItem = styled(Link)<{ $active?: boolean }>`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 12px;
  text-decoration: none;
  color: inherit;

  svg path {
    fill: ${({ $active }) => ($active ? "#5C5EF5" : "#454A52")};
    transition: fill 0.2s;
  }
`;
export const NavImageWrapper = styled.div`
  width: 24px;
  height: 24px;
`;
export const NavText = styled.div<{ $active?: boolean; $isUser?: boolean }>`
  font-family: "Paperlogy-5Medium";
  font-size: 18px;
  font-weight: 500;
  color: ${({ $active, $isUser }) =>
    $isUser ? "white" : $active ? "#5C5EF5" : "#454A52"};
  transition: color 0.2s;
`;
export const LogoutBox = styled.div`
  margin-top: 200px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
export const LogoutText = styled.span`
  font-family: "Paperlogy-5Medium";
  font-size: 18px;
  font-weight: 500;
  color: #454a52;
`;
