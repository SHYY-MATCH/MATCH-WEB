import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../shared/hooks/useLogin";

const KakaoRedirect = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const { mutate, data, isPending, isError, error } = useLogin();

  useEffect(() => {
    if (code) {
      mutate(code);
    }
  }, [code, mutate]);

  useEffect(() => {
    if (data) {
      console.log("로그인 응답 데이터:", data);
      console.log("tokenResponse:", data.tokenResponse);
      console.log("name:", data.name);

      if (data?.tokenResponse) {
        const { accessToken, refreshToken } = data.tokenResponse;
        const userName = data.name; // data.user.name이 아니라 data.name

        console.log("accessToken:", accessToken);
        console.log("refreshToken:", refreshToken);
        console.log("userName:", userName);

        if (accessToken && refreshToken && userName) {
          try {
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("userName", userName);
            navigate("/");
          } catch (error) {
            console.error("토큰 저장 실패:", error);
            alert("로그인 처리 중 오류가 발생했습니다. 다시 시도해주세요.");
            navigate("/");
          }
        } else {
          console.error("토큰 또는 사용자 정보 누락:", {
            hasAccessToken: !!accessToken,
            hasRefreshToken: !!refreshToken,
            hasUserName: !!userName,
            data,
          });
          alert("로그인 정보가 올바르지 않습니다. 다시 시도해주세요.");
          navigate("/");
        }
      } else {
        console.error("tokenResponse가 없습니다:", data);
        alert("로그인 정보가 올바르지 않습니다. 다시 시도해주세요.");
        navigate("/");
      }
    }
  }, [data, navigate]);

  useEffect(() => {
    if (isError) {
      console.error("로그인 에러:", error);
      alert("로그인 실패! 다시 시도해주세요.");
      navigate("/");
    }
  }, [isError, error, navigate]);

  if (isPending) return <div>로그인 처리 중입니다...</div>;
  return null;
};

export default KakaoRedirect;
