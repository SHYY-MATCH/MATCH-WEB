import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 15%;
  height: 100vh;
  padding: 46px 14px 0px 14px;
`;
export const LogoCotainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 64px;
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
export const NavText = styled.div<{ $active?: boolean }>`
  font-family: "Paperlogy-8ExtraBold";
  font-size: 18px;
  font-weight: 500;
  color: ${({ $active }) => ($active ? "#5C5EF5" : "#454A52")};
  transition: color 0.2s;
`;
export const LogoutBox = styled.div`
  padding-top: 300px;
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const LogoutText = styled.span`
  font-family: "Paperlogy-8ExtraBold";
  font-size: 18px;
  font-weight: 500;
  color: #454a52;
`;
