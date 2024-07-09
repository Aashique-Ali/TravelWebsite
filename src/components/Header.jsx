import React, { useState } from "react"
import { Link } from "react-router-dom"
import { IoMenu } from "react-icons/io5"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="flex justify-between items-center w-[100%] h-10 py-4 pl-10 pr-20 bg-white border-b-2 sm:px-20 sticky top-0">
        <div className="font-bold text-slate-600">Travel Agency</div>
        <div className=" text-slate-600 font-semibold flex flex-col absolute top-3 right-0 w-[100%] ">
          <IoMenu
            onClick={() => setOpen(!open)}
            className="text-2xl ml-64 cursor-pointer sm:hidden "
          />
          <div
            className={`bg-slate-600 h-[100vh] flex justify-center items-center text-xl ${
              open ? "block" : "hidden w-[0px]"
            } sm:bg-transparent sm:block `}
          >
            <ul
              className={`justify-center items-center gap-8 flex flex-col text-white sm:flex-row sm:static  sm:flex sm:text-slate-600 sm:justify-end sm:mr-8`}
            >
              <Link
                to={"/"}
                className="cursor-pointer hover:text-black active:text-black"
                onClick={() => setOpen(!open)}
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="cursor-pointer hover:text-black active:text-black"
                onClick={() => setOpen(!open)}
              >
                About
              </Link>
              <Link
                to={"/services"}
                className="cursor-pointer hover:text-black active:text-black"
                onClick={() => setOpen(!open)}
              >
                Services
              </Link>
              <Link
                to={"/contact"}
                className="cursor-pointer hover:text-black active:text-black"
                onClick={() => setOpen(!open)}
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
