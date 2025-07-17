import styled from "styled-components";

interface PostOptionProps {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const Button = styled.button<{ active: boolean }>`
  background-color: transparent;
  color: ${(props) => (props.active ? "#5C5EF5" : "#70747A")};
  padding: 4px 12px;
  border: none;
  font-family: "Paperlogy-4Regular";
  font-size: 18px;
  cursor: pointer;
`;

const PostOption = ({ text, active = false, onClick }: PostOptionProps) => {
  return (
    <Button onClick={onClick} active={active}>
      {text}
    </Button>
  );
};

export default PostOption;
