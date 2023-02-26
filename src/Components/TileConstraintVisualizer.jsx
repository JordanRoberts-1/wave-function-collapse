import { React, useState } from "react";
import COLOR_MAP, { TILE_SIZE, TileData } from "../Globals.js";
import TileEditor from "./TileEditor.jsx";

const TileConstraintVisualizer = () => {
  const [tiles, setTiles] = useState(() => {
    let array = [];
    for (let i = 0; i < 3; i++) {
      array[i] = new TileData();
    }
    return array;
  });
  const updateColorData = (index, newData) => {
    let newArr = [...tiles];
    newArr[index].updateColors(newData);
    setTiles(newArr);
  };

  return (
    <div>
      <TileEditor onTileUpdate={updateColorData} tiles={tiles} />
    </div>
  );
};

export default TileConstraintVisualizer;
