import React from "react"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { FaPhoneVolume } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa6"
import { AiFillTwitterCircle } from "react-icons/ai"
import { ImLinkedin } from "react-icons/im"
import { FaGooglePlus } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="  mx-32 mt-16">
      <div className="flex justify-center items-center gap-6">
        <Link
          to={"https://www.facebook.com/ashiqali.bughio?mibextid=ZbWKwL"}
          target="blank"
        >
          <FaFacebook className=" text-xl" />
        </Link>
        <Link
          to={"https://www.facebook.com/ashiqali.bughio?mibextid=ZbWKwL"}
          target="blank"
        >
          <AiFillTwitterCircle className="text-2xl" />
        </Link>

        <Link
          to={"https://www.linkedin.com/in/aashique-ali-9a073521a"}
          target="blank"
        >
          <ImLinkedin className="text-2xl rounded-full" />
        </Link>
        <Link
          to={"https://www.facebook.com/ashiqali.bughio?mibextid=ZbWKwL"}
          target="blank"
        >
          <FaGooglePlus className="text-2xl" />
        </Link>
      </div>
      <div className="flex justify-center items-center flex-col sm:flex-row  gap-16 mt-4 border-t-[1px] border-gray-400 pt-4">
        <div className="flex justify-center items-center flex-col gap-2 w-[250px] text-center">
          <FaLocationDot />
          <h1>ADDRESS</h1>
          <p>123/21 First Street, Karachi, sindh ,Pakistan</p>
        </div>

        <div className="flex justify-center items-center flex-col gap-2 w-[250px] text-center">
          <MdEmail />
          <h1>EMAIL</h1>
          <p>Info@company.com</p>
          <p>Support@company.com</p>
        </div>

        <div className="flex justify-center items-center flex-col gap-2 w-[250px] text-center">
          <FaPhoneVolume />
          <h1>PHONE</h1>
          <p>+9232-445-7777</p>
          <p>+9232-335-18181</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
