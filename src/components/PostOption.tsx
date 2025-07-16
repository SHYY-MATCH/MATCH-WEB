import { useState } from "react";
import styled from "styled-components";

interface PostOptionProps {
  text: string;
}

interface ButtonProps {
  $active: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: transparent;
  color: ${({ $active }) => ($active ? "#5C5EF5" : "#70747A")};
  padding: 4px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Paperlogy-4Regular";
  font-size: 18px;
`;

const PostOption = ({ text }: PostOptionProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <Button $active={active} onClick={handleClick}>
      {text}
    </Button>
  );
};

export default PostOption;
