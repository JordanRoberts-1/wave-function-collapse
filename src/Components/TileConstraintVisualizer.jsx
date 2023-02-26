import { React, useState } from "react";
import COLOR_MAP from "../Colors.js";
import TileEditor from "./TileEditor.jsx";

const TileConstraintVisualizer = () => {
  const [colorData, setColorData] = useState(
    Array(3).fill(Array(9).fill("white"))
  );
  const updateColorData = (index, newData) => {
    console.log(
      `Changing data in TileConstraintVisualizer with index of ${index} and data of ${newData}`
    );
    let newArr = [...colorData];
    newArr[index] = newData;
    setColorData(newArr);
  };

  return (
    <div>
      <TileEditor onTileUpdate={updateColorData} tileData={colorData} />
    </div>
  );
};

export default TileConstraintVisualizer;
