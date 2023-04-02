import { React } from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import HomeCardsContainer from "./HomeCardsContainer";

const Home = () => {
  const aboutTexts = [
    "Edit and design tiles that will be placed and generated in a grid. Use these to make organic patterns!",
    "Constraints affect the rules for how tiles connect. For this visualizer, matching edges get connected.",
    "Watch the algorithm play out. Either let the algorithm decide everything or manually place tiles.",
  ];

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
        <HomeCardsContainer aboutTexts={aboutTexts} />
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
