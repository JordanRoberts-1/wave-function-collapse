import { React, useState } from "react";
import { TileData } from "../Globals.js";
import TileEditor from "./TileEditor.jsx";
import Visualizer from "./Visualizer.jsx";

const TileConstraintVisualizer = () => {
  const [tiles, setTiles] = useState(() => {
    let array = [];
    for (let i = 0; i < 14; i++) {
      array[i] = new TileData(i);
    }
    array = createStartingTileSet(array);

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
function createStartingTileSet(array) {
  array[1].updateColors([
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
  ]);
  array[2].updateColors([
    "orange",
    "orange",
    "orange",
    "green",
    "green",
    "green",
    "green",
    "green",
    "green",
  ]);
  array[3].updateColors([
    "blue",
    "blue",
    "blue",
    "orange",
    "orange",
    "orange",
    "orange",
    "orange",
    "orange",
  ]);
  array[4].updateColors([
    "orange",
    "orange",
    "orange",
    "orange",
    "orange",
    "orange",
    "orange",
    "orange",
    "orange",
  ]);
  array[5].updateColors([
    "orange",
    "orange",
    "orange",
    "green",
    "green",
    "orange",
    "green",
    "green",
    "orange",
  ]);
  array[6].updateColors([
    "green",
    "green",
    "green",
    "orange",
    "orange",
    "green",
    "orange",
    "orange",
    "green",
  ]);
  array[7].updateColors([
    "blue",
    "blue",
    "blue",
    "orange",
    "orange",
    "blue",
    "orange",
    "orange",
    "blue",
  ]);
  array[8].updateColors([
    "green",
    "green",
    "green",
    "green",
    "orange",
    "green",
    "green",
    "orange",
    "orange",
  ]);
  array[9].updateColors([
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
  ]);
  array[10].updateColors([
    "orange",
    "orange",
    "orange",
    "orange",
    "blue",
    "orange",
    "orange",
    "blue",
    "orange",
  ]);
  array[11].updateColors([
    "orange",
    "blue",
    "orange",
    "orange",
    "blue",
    "orange",
    "blue",
    "blue",
    "blue",
  ]);
  array[12].updateColors([
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "orange",
    "blue",
    "orange",
  ]);
  array[13].updateColors([
    "orange",
    "blue",
    "orange",
    "orange",
    "orange",
    "orange",
    "orange",
    "orange",
    "orange",
  ]);
  return array;
}
