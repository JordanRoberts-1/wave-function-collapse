import { React, useState } from "react";
import COLOR_MAP, { TILE_SIZE, TileData } from "../Globals.js";
import TileEditor from "./TileEditor.jsx";
import Visualizer from "./Visualizer.jsx";

const TileConstraintVisualizer = () => {
  const [tiles, setTiles] = useState(() => {
    let array = [];
    for (let i = 0; i < 6; i++) {
      array[i] = new TileData(i);
    }
    return array;
  });

  const updateConstraintData = (index, constraintKey, newValue) => {
    let newArr = [...tiles];
    newArr[index].updateConstraint(constraintKey, newValue);
    setTiles(newArr);
  };

  const updateColorData = (index, newData) => {
    let newArr = [...tiles];
    newArr[index].updateColors(newData);
    setTiles(newArr);
  };

  const addTile = () => {
    setTiles((oldTiles) => {
      const newTiles = [...oldTiles];
      newTiles.push(new TileData(oldTiles.length));
      return newTiles;
    });
  };

  const removeTile = (index) => {
    setTiles((oldTiles) => {
      const newTiles = [...oldTiles];
      newTiles.splice(index, 1);
      return newTiles;
    });
  };

  return (
    <div>
      <TileEditor
        onColorUpdate={updateColorData}
        onConstraintUpdate={updateConstraintData}
        tiles={tiles}
        onAddTile={addTile}
        onRemoveTile={removeTile}
      />
      <Visualizer tiles={tiles} />
    </div>
  );
};

export default TileConstraintVisualizer;
