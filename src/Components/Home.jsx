import { React, useEffect, useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import HomeCard from "./HomeCard";

const Home = () => {
  const aboutTexts = [
    "Edit and design tiles that will be placed and generated in a grid. Use these to make organic patterns!",
    "Constraints affect the rules for how tiles connect. For this visualizer, matching edges get connected.",
    "Watch the algorithm play out. Either let the algorithm decide everything or manually place tiles.",
  ];

  const [arrowPx, setArrowPx] = useState("0");

  useEffect(() => {
    setTimeout(() => {
      setArrowPx("2");
    }, 4250);
  }, []);

  return (
    <div
      className="w-screen h-screen grid place-items-center bg-[url('images/HomepageBackground.jpg')] bg-no-repeat bg-cover bg-center"
      id="Home"
    >
      <div className="max-w-[50%]">
        <h1 className="text-6xl mb-12 text-center animate-[fadeindown_750ms_250ms_ease-in-out_forwards] opacity-0 font-retro font-bold text-coloredtext">
          Wave Function Collapse Simulator!
        </h1>
        <p className="text-2xl text-center mb-24 animate-[fadeindown_750ms_1s_ease-in-out_forwards] opacity-0">
          The wave function collapse algorithm is a way of procedurally
          generating organic designs based on simple constraints, continue
          further to find out more!
        </p>
        <ArcherContainer strokeColor="#ffffff" strokeWidth={arrowPx}>
          <div className="grid grid-rows-1 grid-cols-3 gap-20">
            <div className="animate-[fadeinup_500ms_2s_ease-in-out_forwards] opacity-0">
              <ArcherElement
                id="element1"
                relations={[
                  {
                    targetId: "element2",
                    targetAnchor: "left",
                    sourceAnchor: "right",
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
      </div>

      <div className=" absolute bottom-2 flex flex-col items-center animate-bounce">
        <div className="font-sans text-xl text-center text-coloredtext cursor-default">
          Get Started
        </div>
        <a href="#TileEditor">
          <ChevronDoubleDownIcon className="w-12 stroke-coloredtext hover:stroke-selection cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Home;
