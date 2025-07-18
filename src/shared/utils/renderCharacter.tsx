import Boy from "../../assets/characters/boy.png";
import Girl from "../../assets/characters/girl.png";
import { clothesData } from "../data/clothes";
import { accessoriesDate } from "../data/accessories";

interface CharacterProps {
  gender: "man" | "woman";
  clothes: string;
  accessories: string;
  topStyle?: string;
}

export const renderCharacter = ({
  gender,
  clothes,
  accessories,
  topStyle = "-11rem",
}: CharacterProps) => {
  const base = gender === "man" ? Boy : Girl;

  const clothesObj = clothesData.find((item) => item.name === clothes);
  const accessoryObj = accessoriesDate.find(
    (item) => item.name === accessories,
  );

  return (
    <div
      className="character"
      style={{
        width: 250,
        position: "absolute",
        top: topStyle,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 2,
      }}
    >
      <img src={base} alt="base" width={250} />
      {clothesObj?.image && (
        <img
          src={clothesObj.image}
          alt="clothes"
          width={250}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      )}
      {accessoryObj?.image && (
        <img
          src={accessoryObj.image}
          alt="accessory"
          width={250}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      )}
    </div>
  );
};
