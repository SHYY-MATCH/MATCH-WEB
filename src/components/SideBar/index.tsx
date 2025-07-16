import Logo from "../../assets/Logo";
import Bet from "../../assets/sidebar/Bet";
import Community from "../../assets/sidebar/Community";
import Home from "../../assets/sidebar/Home";
import Login from "../../assets/sidebar/Login";
import Logout from "../../assets/sidebar/Logout";
import Rank from "../../assets/sidebar/Rank";
import * as S from "./style";

import { useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const navDetails = [
    { id: 1, name: "로그인", img: Login, link: "/login" },
    { id: 2, name: "홈", img: Home, link: "/home" },
    { id: 3, name: "배팅 목록", img: Bet, link: "/betting-list" },
    { id: 4, name: "랭킹", img: Rank, link: "/ranking" },
    { id: 5, name: "게시판", img: Community, link: "/community" },
  ];

  return (
    <S.Container>
      <S.LogoCotainer>
        <Logo />
      </S.LogoCotainer>

      <S.MainNavBar>
        {navDetails.map((nav) => {
          const Icon = nav.img;
          const isActive = location.pathname === nav.link;

          return (
            <S.NavItem key={nav.id} to={nav.link} $active={isActive}>
              <S.NavImageWrapper>
                <Icon />
              </S.NavImageWrapper>
              <S.NavText $active={isActive}>{nav.name}</S.NavText>
            </S.NavItem>
          );
        })}
      </S.MainNavBar>

      <S.LogoutBox>
        <Logout fillColor="#454A52" />
        <S.LogoutText>로그아웃</S.LogoutText>
      </S.LogoutBox>
    </S.Container>
  );
};

export default SideBar;
