import styled from "styled-components";

interface PostOptionProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface ButtonProps {
  $active: boolean;
}

const Buttons = styled.button<ButtonProps>`
  background-color: transparent;
  color: ${({ $active }) => ($active ? "#5C5EF5" : "#70747A")};
  padding: 12px 16px;
  border: 1px solid ${({ $active }) => ($active ? "#5C5EF5" : "#454A52")};
  border-radius: 12px;
  cursor: pointer;
  font-family: "Paperlogy-5Medium";
  font-size: 18px;
`;

const Button = ({ text, isActive = false, onClick }: PostOptionProps) => {
  return (
    <Buttons $active={isActive} onClick={onClick}>
      {text}
    </Buttons>
  );
};

export default Button;
