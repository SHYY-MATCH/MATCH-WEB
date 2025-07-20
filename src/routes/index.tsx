import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Community from "../pages/Community";
import Post from "../pages/Post";
import PostDetail from "../pages/PostDetail";
import KakaoRedirect from "../pages/KakaoRedirect";
import Ranking from "../pages/Ranking";
import BettingList from "../pages/BettingList";
import BettingDetail from "../pages/BettingDetail";

function Router() {
  return useRoutes([
    { path: "/oauth/code", element: <KakaoRedirect /> },
    {
      path: "/",
      element: <Home />,
    },
    // community탭
    {
      path: "/community",
      element: <Community />,
    },
    {
      path: "/post",
      element: <Post />,
    },
    {
      path: "/post-detail",
      element: <PostDetail />,
    },
    //bet-list 탭
    {
      path: "/betting-list",
      element: <BettingList />,
    },
    {
      path: "/bet-detail",
      element: <BettingDetail />,
    },
    {
      path: "/ranking",
      element: <Ranking />,
    },
  ]);
}

export default Router;
