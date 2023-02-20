import React from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import HomeCard from "./HomeCard";

const Home = () => {
  return (
    <div className="flex flex-row w-full h-screen place-items-center bg-darkest">
      <ArcherContainer strokeColor="white">
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
          <HomeCard />
        </ArcherElement>
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
          <HomeCard />
        </ArcherElement>
        <ArcherElement id="element3">
          <HomeCard />
        </ArcherElement>
      </ArcherContainer>
    </div>
  );
};

export default Home;
