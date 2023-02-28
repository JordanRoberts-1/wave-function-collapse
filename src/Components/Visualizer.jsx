import React, { useEffect } from "react";
import Tile from "./Tile";

const Visualizer = ({ tiles }) => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-darkest to-light flex flex-col">
      <div className="w-[50vw] h-[50vw] grid grid-cols-16 grid-rows-16">
        {tiles?.map((tileData, index) => {
          return <Tile key={index} tileData={tileData} />;
        })}
      </div>
    </div>
  );
};

export default Visualizer;
