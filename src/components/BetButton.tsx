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
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(135deg, #5C5EF5 0%, #4f46e5 100%)"
      : "linear-gradient(135deg, #2a2f38 0%, #1f2329 100%)"};
  color: ${({ $active }) => ($active ? "#FFFFFF" : "#8d94a7")};
  padding: 16px 32px;
  border: 2px solid ${({ $active }) => ($active ? "#5C5EF5" : "#3a3f48")};
  border-radius: 12px;
  cursor: pointer;
  font-family: "Paperlogy-6SemiBold";
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ $active }) =>
    $active
      ? "0 4px 12px rgba(92, 94, 245, 0.3)"
      : "0 2px 8px rgba(0, 0, 0, 0.2)"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ $active }) =>
      $active
        ? "0 6px 16px rgba(92, 94, 245, 0.4)"
        : "0 4px 12px rgba(0, 0, 0, 0.3)"};
  }

  &:active {
    transform: translateY(0);
  }
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
