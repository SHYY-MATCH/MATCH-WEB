import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  display: flex;
  min-height: 100vh;
  background-color: #1f2329;
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const BackContainer = styled.div`
  padding: 48px 68px 0 68px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
export const BackText = styled.div`
  font-size: 18px;
  font-family: "Paperlogy-4Regular";
  color: #70747a;
`;
export const MainWriteContainer = styled.div`
  width: 70%;
  background-color: #2a303a;
  margin: 32px 90px;
  border-radius: 20px;
  padding: 44px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
export const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const WriteHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TitleInput = styled.input`
  width: 90%;
  height: fit-content;
  background-color: transparent;
  border: none;
  font-size: 24px;
  font-family: "Paperlogy-6SemiBold";
  color: white;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #70747a;
  }
`;
export const AddFileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
export const AddFileText = styled.div`
  font-size: 18px;
  font-family: "Paperlogy-5Medium";
  color: #5c5ef5;
`;
export const Line = styled.div`
  width: 100%;
  background-color: #454a52;
  height: 1px;
  align-self: stretch;
  margin: 22px 0;
`;
export const MainWrite = styled.textarea`
  width: 100%;
  min-height: 443px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-family: "Paperlogy-4Regular";
  color: white;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #70747a;
  }
`;
export const FileContainer = styled.div`
  padding: 12px 16px;
  background-color: #454a52;
  color: #70747a;
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  border-radius: 100px;
  position: absolute;
  bottom: 0;
`;
export const PostBtn = styled.div`
  margin-left: auto;
`;
