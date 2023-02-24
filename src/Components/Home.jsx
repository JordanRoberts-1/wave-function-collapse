import { React } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import HomeCard from "./HomeCard";

const Home = () => {
  return (
    <div className="w-screen h-screen grid place-items-center bg-[url('images/HomepageBackground.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-[50%] animate-fade-in-up opacity-0">
        <h1 className="text-6xl mb-12 text-center font-retro font-bold text-coloredtext">
          Wave Function Collapse Simulator!
        </h1>
        <p className="text-2xl text-center mb-24">
          The wave function collapse algorithm is a way of procedurally
          generating organic designs based on simple constraints, continue
          further to find out more!
        </p>
        <ArcherContainer strokeColor="white">
          <div className="grid grid-rows-1 grid-cols-3 gap-20">
            <div>
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
                <div>
                  <HomeCard title="Tile Editor" />
                </div>
              </ArcherElement>
            </div>
            <div>
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
                <div>
                  <HomeCard title="Constraints" />
                </div>
              </ArcherElement>
            </div>
            <div>
              <ArcherElement id="element3">
                <div>
                  <HomeCard title="Visualize" />
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
        {/* <Link to="Projects" smooth={true} duration={750}> */}
        <ChevronDoubleDownIcon className="w-12 stroke-coloredtext hover:stroke-selection cursor-pointer" />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Home;
