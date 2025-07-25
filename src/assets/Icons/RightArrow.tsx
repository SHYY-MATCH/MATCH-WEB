interface CoinProps {
  isNext?: boolean;
}

const RightArrow = ({ isNext = false }: CoinProps) => {
  const fillColor = isNext ? "#5C5EF5" : "#454A52";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.29504 16.59L12.875 12L8.29504 7.41L9.70504 6L15.705 12L9.70504 18L8.29504 16.59Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default RightArrow;
