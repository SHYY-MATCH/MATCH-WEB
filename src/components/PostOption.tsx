import styled from "styled-components";

interface PostOptionProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
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

const PostOption = ({ text, isActive, onClick }: PostOptionProps) => {
  return (
    <Button $active={isActive} onClick={onClick}>
      {text}
    </Button>
  );
};

export default PostOption;

// import { useState } from "react";
// import PostOption from "./components/PostOption";

// function App() {
//   const [selected, setSelected] = useState<number | null>(0); // 기본 첫 번째 선택

//   const handleSelect = (index: number) => {
//     if (selected !== index) {
//       setSelected(index);
//     }
//   };

//   const options = ["text1", "text2", "text3"];

//   return (
//     <div>
//       {options.map((text, idx) => (
//         <PostOption
//           key={idx}
//           text={text}
//           isActive={selected === idx}
//           onClick={() => handleSelect(idx)}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;
