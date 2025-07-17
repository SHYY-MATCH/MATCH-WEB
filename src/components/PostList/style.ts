import styled from "styled-components";

export const Container = styled.div`
  background-color: #2a303a;
  color: white;
  padding: 20px 24px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-family: "Paperlogy-6SemiBold";
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

export const Profile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  object-fit: cover;
  background-color: #d9d9d9;
`;

export const Name = styled.div`
  font-size: 16px;
  color: #9da0a4;
  font-family: "Paperlogy-4Regular";
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
  font-size: 14px;
  color: #9da0a4;
  font-family: "Paperlogy-4Regular";
`;
