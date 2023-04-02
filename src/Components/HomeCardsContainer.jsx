import { React, useState, useEffect } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import HomeCard from "./HomeCard";

const HomeCardsContainer = ({ aboutTexts }) => {
  const [arrowPx1, setArrowPx1] = useState("0");
  const [arrowPx2, setArrowPx2] = useState("0");

  useEffect(() => {
    setTimeout(() => {
      setArrowPx1("2");
    }, 3400);
    setTimeout(() => {
      setArrowPx2("2");
    }, 4150);
  }, []);

  return (
    <ArcherContainer strokeColor="#ffffff">
      <div className="grid grid-rows-1 grid-cols-3 gap-20">
        <div className="animate-[fadeinup_500ms_2s_ease-in-out_forwards] opacity-0">
          <ArcherElement
            id="element1"
            relations={[
              {
                targetId: "element2",
                targetAnchor: "left",
                sourceAnchor: "right",
                style: { strokeWidth: arrowPx1 },
              },
            ]}
          >
            <div className="w-72 h-[22rem]">
              <HomeCard
                title="Tile Editor"
                aboutText={aboutTexts[0]}
                scrollId="#TileEditor"
              />
            </div>
          </ArcherElement>
        </div>
        <div className="animate-[fadeinup_500ms_2.75s_ease-in-out_forwards] opacity-0">
          <ArcherElement
            id="element2"
            relations={[
              {
                targetId: "element3",
                targetAnchor: "left",
                sourceAnchor: "right",
                style: { strokeWidth: arrowPx2 },
              },
            ]}
          >
            <div className="w-72 h-[22rem]">
              <HomeCard
                title="Constraints"
                aboutText={aboutTexts[1]}
                scrollId="#TileEditor"
              />
            </div>
          </ArcherElement>
        </div>
        <div className="animate-[fadeinup_500ms_3.5s_ease-in-out_forwards] opacity-0">
          <ArcherElement id="element3">
            <div className="w-72 h-[22rem]">
              <HomeCard
                title="Visualize"
                aboutText={aboutTexts[2]}
                scrollId="#Visualize"
              />
            </div>
          </ArcherElement>
        </div>
      </div>
    </ArcherContainer>
  );
};

export default HomeCardsContainer;
