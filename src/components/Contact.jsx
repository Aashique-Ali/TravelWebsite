import React from "react"
import pakistan from "../../public/assets/pakistan.jpg"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { FaPhoneVolume } from "react-icons/fa6"

const Contact = () => {
  return (
    <>
      <div
        className="w-[100%]  h-[40vh] bg-cover bg-center flex justify-center items-center mb-8"
        style={{ backgroundImage: `url("${pakistan}")` }}
      >
        <h1 className=" text-white text-4xl">Contact Us</h1>
      </div>
      <div className="flex justify-center items-around gap-24 flex-col sm:flex-row text-center text-wrap">
        <div className="flex justify-center items-center flex-col w-[400px] gap-8">
          <h1 className="text-2xl font-semibold ">Contact Our Agency</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            distinctio nobis eaque consequatur ducimus id dolorem alias libero
            magni amet quidem quibusdam quae possimus recusandae, vel dicta esse
            temporibus nisi dignissimos ipsam, eius totam facere voluptatibus!
            Recusandae voluptates possimus hic omnis aspernatur dolorem iusto
            veritatis aut labore consectetur ipsam atque, nostrum, consequatur
            est nobis accusamus.
          </p>
        </div>
        <div className="flex justify-center items-start flex-col gap-8">
          <h1 className="text-2xl font-semibold">Our Contacts</h1>
          <p className="flex justify-center items-center  gap-2">
            <FaLocationDot />
            123/21 First Street, Karachi, sindh ,Pakistan
          </p>
          <p className="flex justify-center items-center gap-2">
            <FaPhoneVolume />
            9232-445-7777
          </p>
          <p className="flex justify-center items-center gap-2">
            <FaPhoneVolume />
            9232-335-18181
          </p>
          <p className="flex justify-center items-center gap-2">
            <MdEmail />
            Info@company.com
          </p>
        </div>
      </div>
    </>
  )
}

export default Contact
