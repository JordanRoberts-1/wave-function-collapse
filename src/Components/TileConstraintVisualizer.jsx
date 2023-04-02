import { React, useState } from "react";
import { TileData } from "../Globals.js";
import TileEditor from "./TileEditor.jsx";
import Visualizer from "./Visualizer.jsx";

const TileConstraintVisualizer = () => {
  const [tiles, setTiles] = useState(() => {
    let array = [];
    for (let i = 0; i < 2; i++) {
      array[i] = new TileData(i);
    }
    return array;
  });

  const handleUpdateColorData = (index, newData) => {
    let newArr = [...tiles];
    newArr[index].updateColors(newData);
    setTiles(newArr);
  };

  const handleAddTile = () => {
    setTiles((oldTiles) => {
      const newTiles = [...oldTiles];
      newTiles.push(new TileData(oldTiles.length));
      return newTiles;
    });
  };

  const handleRemoveTile = (index) => {
    setTiles((oldTiles) => {
      const newTiles = [...oldTiles];
      newTiles.splice(index, 1);
      return newTiles;
    });
  };

  return (
    <div>
      <TileEditor
        onColorUpdate={handleUpdateColorData}
        tiles={tiles}
        onAddTile={handleAddTile}
        onRemoveTile={handleRemoveTile}
      />
      <Visualizer tiles={tiles} />
    </div>
  );
};

export default TileConstraintVisualizer;
