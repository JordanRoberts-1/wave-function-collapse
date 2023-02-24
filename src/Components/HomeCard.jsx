import React from "react";

const HomeCard = ({ title, aboutText }) => {
  return (
    <div className="rounded-2xl bg-darkest/90 max-w-sm h-full p-8 flex flex-col items-center transform transition duration-300 hover:scale-125 hover:-translate-y-20 backdrop-blur-lg hover:bg-darkest/100 cursor-pointer">
      <h1 className="text-4xl text-center border-b-2 font-bold mb-4 pb-4 w-full text-coloredtext border-b-coloredtext/25">
        {title}
      </h1>
      <p className="text-2xl text-gray-100">
        This is some about text, i don't really know what else to put so im just
        gonna keep typing
      </p>
    </div>
  );
};

export default HomeCard;
