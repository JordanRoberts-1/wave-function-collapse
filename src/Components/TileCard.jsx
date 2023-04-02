import { React, useState, useEffect } from "react";
import COLOR_MAP, { TILE_SIZE, TileData } from "../Globals.js";
import { XMarkIcon } from "@heroicons/react/24/outline";
import TrashIcon from "./TrashIcon.jsx";

const TileCard = ({
  onUpdateColors,
  onUpdateConstraints,
  globalIndex,
  tileData,
  onRemoveTile,
}) => {
  const [cardExpanded, setCardExpanded] = useState(false);
  const [currentColor, setCurrentColor] = useState("white");
  const [gridRows, setGridRows] = useState(`grid-rows-${TILE_SIZE}`);
  const [gridCols, setGridCols] = useState(`grid-cols-${TILE_SIZE}`);

  const handleColorChange = (colorKey) => {
    setCurrentColor(colorKey);
  };

  const handleCardOpen = () => {
    setCardExpanded(!cardExpanded);
  };

  const handleClick = (index, color) => {
    let colorData = tileData.getColors();
    colorData = colorData?.map((c, i) => {
      if (i === index) {
        return color;
      } else {
        return c;
      }
    });
    onUpdateColors(globalIndex, colorData);
  };

  return (
    <li>
      <div className="transform transition duration-300 hover:scale-150 flex flex-col items-center gap-1 group">
        <div
          className="animate-jigglewiggle rounded-2xl bg-darkest/90 w-40 h-52 p-4 pt-2 flex flex-col items-center backdrop-blur-lg hover:bg-darkest/100 hover:rounded-xl cursor-pointer"
          onClick={handleCardOpen}
        >
          <div className={`grid ${gridRows} ${gridCols} w-32 h-32 mb-4`}>
            {tileData?.getColors()?.map((color, index) => {
              return (
                <div
                  key={index}
                  style={{ background: `${COLOR_MAP[color]}` }}
                  className="w-full h-full"
                ></div>
              );
            })}
          </div>
          <div className="h-2 w-full border-t-2 border-selection/25 mb-2" />
          <h1 className="text-2xl font-retro text-selection">
            Tile {`#${globalIndex}`}
          </h1>
        </div>
        <div className="w-fit h-fit bg-darkest/90 rounded-2xl justify-center p-1 invisible group-hover:flex group-hover:visible">
          <button
            className="cursor-pointer w-4 h-4"
            onClick={() => onRemoveTile(globalIndex)}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
      {/* Expanded Card*/}
      {cardExpanded ? (
        <div
          className="fixed z-20 w-screen h-screen left-0 top-0 grid place-items-center bg-coloredtext/5 backdrop-blur-lg"
          onClick={handleCardOpen}
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
                        onClick={() => handleClick(index, currentColor)}
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
                  handleCardOpen();
                }}
              >
                <TrashIcon />
              </button>
            </div>
            <XMarkIcon
              className="absolute z-40 stroke-coloredtext w-12 top-4 right-4 cursor-pointer transform transition duration-300 hover:rotate-180"
              onClick={handleCardOpen}
            />
          </div>
        </div>
      ) : null}
    </li>
  );
};

export default TileCard;
