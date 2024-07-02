import React from "react"
import plane from "../../public/assets/plane.png"

const Card = (props) => {
  return (
    <>
      <div className="w-[380px] h-[300px] sm:w-[250px] sm:h-[370px] flex justify-center items-center flex-col text-center gap-2 border-gray-300 border-[1.5px] p-4">
        <img className="w-[180px] h-[100px]" src={props.image} alt="" />
        <h1 className="text-xl font-semibold">{props.heading}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi
          asperiores aliquam saepe minima sapiente reprehenderit velit
          veritatis! Necessitatibus .
        </p>
        <button className=" bg-blue-600 px-2 py-1 text-white hover:bg-blue-700">
          More
        </button>
      </div>
    </>
  )
}

export default Card
