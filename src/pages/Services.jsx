import React from "react"
import mountains from "../../public/assets/mountains.jpg"
import plane from "../../public/assets/plane.png"
import building from "../../public/assets/building.png"
import boat from "../../public/assets/boat.png"
import bonefire from "../../public/assets/bonefire.png"
import Card from "../components/Card"
const Services = () => {
  return (
    <>
      <div
        className="w-[100%]  h-[40vh] bg-cover bg-center flex flex-col  justify-center items-center mb-8 text-white text-center"
        style={{ backgroundImage: `url("${mountains}")` }}
      >
        <h1 className="text-3xl">Our Services</h1>
        <p>
          With us you'll find a perfect destination among hundreds available
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 mt-10 flex-col sm:flex-row ">
        <Card image={plane} heading={"AIR TICKETS"} />
        <Card image={boat} heading={"BOATS"} />
        <Card image={building} heading={"HOTELS"} />
        <Card image={bonefire} heading={"BONEFIRE"} />
      </div>
    </>
  )
}

export default Services
