import { React, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import COLOR_MAP from "../Globals.js";
import TrashIcon from "./TrashIcon.jsx";

const ExpandedTileCard = ({
  onCardOpen,
  onRemoveTile,
  onColorUpdate,
  tileData,
  globalIndex,
}) => {
  const [currentColor, setCurrentColor] = useState("white");

  const handleColorChange = (colorKey) => {
    setCurrentColor(colorKey);
  };

  return (
    <div
      className="fixed z-20 w-screen h-screen left-0 top-0 grid place-items-center bg-coloredtext/5 backdrop-blur-lg"
      onClick={onCardOpen}
    >
      <div
        className="animate-growFromNothing grid grid-rows-1 grid-cols-[70%_30%] fixed z-30 w-[60%] h-[90%] bg-gradient-to-bl from-darkest to-dark rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/*tile color grid*/}
        <div className="flex flex-row items-center justify-center p-10">
          <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
            <div className="grid grid-rows-3 grid-cols-3 place-items-center gap-1 w-[100%]">
              {tileData?.getColors()?.map((color, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => onColorUpdate(index, currentColor)}
                    style={{ background: `${COLOR_MAP[color]}` }}
                    className="w-full h-0 pb-full rounded-lg"
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
        {/*Right side tool menu*/}
        <div className="flex flex-col items-center gap-8 m-4 my-8">
          <h1 className="text-5xl w-full text-center font-sans text-coloredtext border-b-2 pb-4 border-b-coloredtext/25">
            Tile {`#${globalIndex}`}
          </h1>
          <div className="grid grid-cols-4 grid-rows-4 gap-4">
            {Object.keys(COLOR_MAP).map((color, index) => {
              return (
                <button
                  key={index}
                  style={{ background: `${color}` }}
                  onClick={() => {
                    handleColorChange(color);
                  }}
                  className="w-8 h-8"
                ></button>
              );
            })}
          </div>
          <button
            className="cursor-pointer w-8 h-8"
            onClick={() => {
              onRemoveTile(globalIndex);
              onCardOpen();
            }}
          >
            <TrashIcon />
          </button>
        </div>
        <XMarkIcon
          className="absolute z-40 stroke-coloredtext w-12 top-4 right-4 cursor-pointer transform transition duration-300 hover:rotate-180"
          onClick={onCardOpen}
        />
      </div>
    </div>
  );
};

export default ExpandedTileCard;
