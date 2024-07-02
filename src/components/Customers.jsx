import React from "react"
import img3 from "../../public/assets/img3.jpeg"
import img4 from "../../public/assets/img4.jpeg"
import img5 from "../../public/assets/img5.jpeg"

const Customers = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center bg-gray-200 mt-8">
      <div className="mb-8">
        <h1 className=" text-3xl">What Customers Say</h1>
        <p>
          Our clients' testimonials are the best proof of our high level of
          services
        </p>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 sm:flex-row">
        <div className="flex justify-center items-center flex-col w-[320px] gap-3">
          <img className=" w-28 rounded-[50%]" src={img3} alt="" />
          <h1 className=" text-xl font-semibold">Aashique Ali</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            soluta neque autumn.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col w-[320px] gap-3">
          <img className=" w-28 rounded-[50%]" src={img4} alt="" />
          <h1 className=" text-xl font-semibold">Sheeraz Ahmed</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            soluta neque autumn.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col w-[320px] gap-3">
          <img className=" w-28 rounded-[50%]" src={img5} alt="" />
          <h1 className=" text-xl font-semibold">Raja khan</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            soluta neque autumn.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Customers
