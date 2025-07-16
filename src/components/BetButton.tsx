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
  padding: 12px 36px;
  border: 1px solied ${({ $active }) => ($active ? "#5C5EF5" : "#454A52")};
  border-radius: 100px;
  cursor: pointer;
  font-family: "Paperlogy-6SemiBold";
  font-size: 24px;
`;

const BetButton = ({ text, isActive, onClick }: PostOptionProps) => {
  return (
    <Button $active={isActive} onClick={onClick}>
      {text}
    </Button>
  );
};

export default BetButton;

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
