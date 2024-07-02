import React from "react"
import river from "../../public/assets/zal-zal-lake.jpg"
import img5 from "../../public/assets/img5.jpeg"
import img3 from "../../public/assets/img3.jpeg"
import img4 from "../../public/assets/img4.jpeg"

const AboutUs = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url("${river}")` }}
        className="w-[100%]  h-[40vh] bg-cover bg-center flex justify-center items-center mb-8"
      >
        <h1 className="text-4xl text-white">About Us</h1>
      </div>

      <div className="text-center px-4 sm:px-[300px]">
        <h1 className="text-2xl font-semibold pb-4">
          Travelling. Tours. Adventure.
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          animi dolor in eos exercitationem blanditiis vel sint. Omnis nesciunt
          blanditiis repudiandae eaque molestias vel veniam alias ullam
          molestiae earum magnam dicta, nihil asperiores atque autem eius
          obcaecati. Labore blanditiis temporibus iusto quis eius repellat,
          possimus quasi quisquam laboriosam beatae officia. Sed nihil earum et
          explicabo eligendi labore modi atque! Vel sit autem veniam, minus
          impedit neque velit iste adipisci architecto aliquam laborum,
          consequuntur recusandae similique. Vero maxime voluptatem assumenda
          deleniti dolorem rerum corporis asperiores a praesentium officiis
          ullam fuga quaerat excepturi est, iure similique. Rerum qui voluptates
          odio praesentium aperiam asperiores a praesentium officiis ullam fuga
          quaerat excepturi est, iure similique. Rerum qui voluptates odio
          praesentium aperiam..
        </p>
      </div>

      <div className="flex justify-center items-center flex-col mt-5 bg-gray-200">
        <h1 className="text-2xl font-semibold">Our Team</h1>
        <p>An experieced team of people passionate about travelling</p>
        <div className="flex justify-center items-center flex-col sm:flex-row mt-2">
          <div className="flex justify-center items-center flex-col w-[320px] gap-3 text-center">
            <img className=" w-28 rounded-[50%]" src={img4} alt="" />
            <h1 className=" text-xl font-semibold">Sheeraz Ahmed</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus soluta neque autumn.
            </p>
          </div>

          <div className="flex justify-center items-center flex-col w-[320px] gap-3 text-center">
            <img className=" w-28 rounded-[50%]" src={img3} alt="" />
            <h1 className=" text-xl font-semibold">Aashique Ahmed</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus soluta neque autumn.
            </p>
          </div>

          <div className="flex justify-center items-center flex-col w-[320px] gap-3 text-center">
            <img className=" w-28 rounded-[50%]" src={img5} alt="" />
            <h1 className=" text-xl font-semibold">Ahmed Ali</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus soluta neque autumn.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
