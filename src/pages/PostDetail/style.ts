import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  display: flex;
  background-color: #1f2329;
  overflow-x: hidden;
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 90px;
`;
export const BackContainer = styled.div`
  padding: 48px 0 0 0;
  display: flex;
  align-items: center;
  margin-right: auto;
  gap: 4px;
  cursor: pointer;
`;
export const BackText = styled.div`
  font-size: 18px;
  font-family: "Paperlogy-4Regular";
  color: #70747a;
`;
export const MainWriteContainer = styled.div`
  width: 100%;
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
  width: 100%;
  flex-direction: column;
`;
export const WriteHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const TitleInput = styled.span`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  font-size: 24px;
  font-family: "Paperlogy-6SemiBold";
  color: white;
`;
export const PostDetailContainer = styled.div`
  display: flex;
`;
export const Name = styled.div`
  padding-left: 16px;
  font-size: 14px;
  color: #9da0a4;
  font-family: "Paperlogy-4Regular";
`;
export const Line = styled.div`
  width: 100%;
  background-color: #454a52;
  height: 1px;
  align-self: stretch;
  margin: 22px 0;
`;
export const MainWrite = styled.span`
  width: 100%;
  min-height: 443px;
  font-size: 18px;
  font-family: "Paperlogy-4Regular";
  color: white;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;
`;
export const PostBtn = styled.div`
  margin-left: auto;
  display: flex;
  gap: 40px;
`;
export const MetaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Text = styled.div`
  font-size: 14px;
  color: #c9cacc;
  font-family: "Paperlogy-4Regular";
`;

export const Date = styled.div`
  padding-left: 16px;
  font-size: 14px;
  color: #9da0a4;
  font-family: "Paperlogy-4Regular";
`;
export const WriteComent = styled.div`
  width: 100%;
  padding-top: 28px;
  display: flex;
  flex-direction: column;
`;
export const AllComentContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
`;
export const WriteComentTitle = styled.div`
  font-size: 18px;
  width: 100%;
  font-family: "Paperlogy-5Medium";
  color: #9da0a4;
  padding-bottom: 20px;
`;
export const WriteComentInput = styled.div`
  width: 100%;
  padding: 44px;
  background-color: #2a303a;
  border-radius: 20px;
`;
export const Coments = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Input = styled.textarea`
  width: 100%;
  min-height: 100px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-family: "Paperlogy-4Regular";
  color: white;
  resize: none;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #70747a;
  }
`;
export const WriteComentPostBtn = styled.button<{ $active: boolean }>`
  margin-top: 12px;
  width: fit-content;
  color: ${({ $active }) => ($active ? "#5C5EF5" : "#70747a")};
  font-size: 18px;
  font-family: "Paperlogy-5Medium";
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  cursor: ${({ $active }) => ($active ? "pointer" : "default")};
  transition: 0.2s ease-in-out;
`;
