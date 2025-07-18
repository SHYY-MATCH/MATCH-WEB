import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Community from "../pages/Community";
import Post from "../pages/Post";
import PostDetail from "../pages/PostDetail";
import KakaoRedirect from "../pages/KakaoRedirect";

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
      path: "/bet-list",
      // element: <BetList />,
    },
    {
      path: "/bet-detail",
      // element: <BetList />,
    },
    {
      path: "/ranking",
      // element: <Ranking />,
    },
  ]);
}

export default Router;
