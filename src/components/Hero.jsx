import React from "react"
import sunset from "../../public/assets/sunset.jpg"
import Islamabad from "../../public/assets/faisal-mosque.jpg"
import Skardu from "../../public/assets/lower-kachura-lake.jpg"
import Kashmir from "../../public/assets/zal-zal-lake.jpg"

const Hero = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url("${sunset}")` }}
        className="w-[100%]  h-[82vh] bg-cover bg-center flex justify-center items-center flex-col gap-4 text-white text-center"
      >
        <h1 className="text-3xl text-wrap">Enjoy Your Dream Vacation</h1>
        <p className="text-2xl text-wrap">
          Travel to any corner of Pakistan, without going around in circles
        </p>
        <button className=" bg-blue-600 px-3 py-1 hover:bg-blue-700">
          More
        </button>
      </div>
      <div className="flex justify-center items-center flex-col mt-12">
        <h1 className=" font-semibold text-3xl text-center text-wrap">
          The best agency you can chose
        </h1>
        <p className="text-center text-wrap">
          We are committed to offering travel services of the highest quality
          combining our energy and enthusiasm with years of experience.
        </p>
        <div className="flex items-center justify-center flex-col  gap-5 mt-5 md:flex-row">
          <div className=" w-[320px] h-[450px] border-[1px] border-gray-300 flex items-center flex-col gap-2  p-2 rounded text-center shadow-xl">
            <img className="w-[100%]" src={Islamabad} alt="" />
            <h1 className="text-xl font-semibold">Islamabad</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ex blanditiis deserunt dignissimos quibusdam ad, eum in voluptatum
              aut placeat praesentium aperiam consectetur assumenda accusantium.
            </p>
            <button className="bg-blue-600 text-white px-2 py-1 hover:bg-blue-700">
              More
            </button>
          </div>
          <div className=" w-[320px] h-[450px] border-[1px] border-gray-300 flex items-center flex-col gap-2  p-2 rounded text-center shadow-xl">
            <img className="w-[100%]" src={Skardu} alt="" />
            <h1 className="text-xl font-semibold">Skardu</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ex blanditiis deserunt dignissimos quibusdam ad, eum in voluptatum
              aut placeat praesentium aperiam consectetur assumenda accusantium.
            </p>
            <button className="bg-blue-600 text-white px-2 py-1 hover:bg-blue-700">
              More
            </button>
          </div>
          <div className=" w-[320px] h-[450px] border-[1px] border-gray-300 flex items-center flex-col gap-2  p-2 rounded text-center shadow-xl">
            <img className="w-[100%]" src={Kashmir} alt="" />
            <h1 className="text-xl font-semibold">Kashmir</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ex blanditiis deserunt dignissimos quibusdam ad, eum in voluptatum
              aut placeat praesentium aperiam consectetur assumenda accusantium.
            </p>
            <button className="bg-blue-600 text-white px-2 py-1 hover:bg-blue-700">
              More
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
