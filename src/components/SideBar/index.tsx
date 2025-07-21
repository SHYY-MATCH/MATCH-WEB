import Logo from "../../assets/Logo";
import Bet from "../../assets/sidebar/Bet";
import Community from "../../assets/sidebar/Community";
import Home from "../../assets/sidebar/Home";
import Login from "../../assets/sidebar/Login";
import Logout from "../../assets/sidebar/Logout";
import Rank from "../../assets/sidebar/Rank";
import { useLogout } from "../../shared/hooks/useLogout";
import * as S from "./style";

import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_AUTH_URL = import.meta.env.VITE_KAKAO_AUTH_URL;
  const userName = localStorage.getItem("userName");
  const logoutMutation = useLogout();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLogoutClick = () => {
    logoutMutation.mutate();
  };

  const navDetails = [
    {
      id: 1,
      name: userName ? `${userName}님` : "로그인",
      img: Login,
      link: KAKAO_AUTH_URL,
    },
    { id: 2, name: "홈", img: Home, link: "/" },
    { id: 3, name: "배팅 목록", img: Bet, link: "/betting-list" },
    { id: 4, name: "랭킹", img: Rank, link: "/ranking" },
    { id: 5, name: "게시판", img: Community, link: "/community" },
  ];

  return (
    <S.Container>
      <S.LogoCotainer onClick={handleLogoClick}>
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
              <S.NavText
                $active={isActive}
                $isUser={nav.id === 1 && userName !== null} // ✅ 첫 항목이 로그인 버튼일 때만 적용
              >
                {nav.name}
              </S.NavText>
            </S.NavItem>
          );
        })}
      </S.MainNavBar>

      <S.LogoutBox onClick={handleLogoutClick}>
        <Logout fillColor="#454A52" />
        <S.LogoutText>로그아웃</S.LogoutText>
      </S.LogoutBox>
    </S.Container>
  );
};

export default SideBar;
