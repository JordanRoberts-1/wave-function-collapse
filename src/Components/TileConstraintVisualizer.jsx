import { React, useState } from "react";
import COLOR_MAP, { TILE_SIZE, TileData } from "../Globals.js";
import TileEditor from "./TileEditor.jsx";
import Visualizer from "./Visualizer.jsx";

//TODO: REMOVE THIS WHOLE FILE, IT'S UNNECESSARY
const TileConstraintVisualizer = () => {
  const [tiles, setTiles] = useState(() => {
    let array = [];
    for (let i = 0; i < 3; i++) {
      array[i] = new TileData(i);
    }
    return array;
  });

  const updateConstraintData = (index, constraintKey, newValue) => {
    let newArr = [...tiles];
    newArr[index].updateConstraint(constraintKey, newValue);
    setTiles(newArr);
    console.log(tiles);
  };

  const updateColorData = (index, newData) => {
    let newArr = [...tiles];
    newArr[index].updateColors(newData);
    setTiles(newArr);
  };

  return (
    <div>
      <TileEditor
        onColorUpdate={updateColorData}
        onConstraintUpdate={updateConstraintData}
        tiles={tiles}
      />
      <Visualizer tiles={tiles} />
    </div>
  );
};

export default TileConstraintVisualizer;
