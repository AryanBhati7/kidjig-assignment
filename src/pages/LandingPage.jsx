import { Button, Header } from "../components/index.js";

import React from "react";

function LandingPage() {
  return (
    <>
      <div
        className="min-h-screen text-white w-full relative  "
        style={{
          backgroundImage: "url('./assets/background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative top-[5rem] mx-[3rem] md:mx-[18rem] md:top-[10rem]">
          <div className="flex flex-col items-start justify-start h-full sm:mr-[20rem]">
            <h1 className="text-5xl leading-tight">
              Empowering Lives Through Innovative{" "}
              <span className="font-bold underline blue-underline">AI</span>{" "}
              Technologies.
            </h1>
            <p className="mt-4 text-lg text-gray-400 w-full">
              Finding new horizons for visionaries to accelerate their
              innovation and progress.
            </p>
            <div className="flex mt-8 space-x-4">
              <Button className="bg-[#6A35FF] text-white hover:bg-[#6b35ffa7]">
                Explore Our Services
              </Button>
              <Button className="bg-transparent">Learn more</Button>
            </div>
          </div>
          <div className="marquee-container py-4 mt-11 px-6 text-xl">
            <div className="flex justify-center w-full animate-marquee-ltr whitespace-nowrap">
              {Array(25)
                .fill(null)
                .map((_, index) => (
                  <React.Fragment key={index}>
                    <span className="mx-4 text-gray-400">
                      From Ideas to Software Solutions 💡✨
                    </span>
                    <span className="mx-4 text-gray-400">
                      From Ideas to Software Solutions 🌟✨
                    </span>
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
