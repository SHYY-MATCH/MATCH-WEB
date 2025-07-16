import styled from "styled-components";

interface BetTitleProps {
  title: string;
  subTitle: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 356px;
  padding: 12px 0;
  align-items: center;
  border-radius: 8px;
  background-color: #454a52;
`;
const Title = styled.span`
  font-family: "Paperlogy-6SemiBold";
  font-size: 20px;
  color: white;
`;
const SubTitle = styled.span`
  font-family: "Paperlogy-4Regular";
  font-size: 16px;
  color: #a6a6a6;
`;

const BetTitle = ({ title, subTitle }: BetTitleProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};

export default BetTitle;
