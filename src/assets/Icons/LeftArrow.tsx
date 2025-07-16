interface CoinProps {
  isNext?: boolean;
}

const LeftArrow = ({ isNext = false }: CoinProps) => {
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
        d="M15.705 16.59L11.125 12L15.705 7.41L14.295 6L8.29504 12L14.295 18L15.705 16.59Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default LeftArrow;
