import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="border-gray-300 flex border-b bg-white px-8 h-16 justify-between items-center ">
      <div className="flex">
        <p className="text-black">
          Payments
        </p>
        <span className="flex text-xs pl-4 text-gray-500 items-center">
          <AiOutlineQuestionCircle />
          How it works
        </span>
      </div>
      <div className="relative hidden lg:block">
        <FaSearch className="absolute h-4 w-4 left-4 top-2.5" />
        <input
          type="text"
          placeholder="Search by features, tutorials, etc."
          className="bg-[#F2F2F2] flex items-center rounded-md gap-2 pl-10 pr-4 py-2 placeholder-gray-500 text-sm w-[400px] focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>
      <div className="flex gap-3">
        <button className="h-10 w-10 bg-gray-200 rounded-full grid place-items-center">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    
    >
      <path
        fill="#4D4D4D"
        d="M18.421.024L1.116 3.382C.463 3.5 0 4.13 0 4.852v7.65c0 .723.463 1.353 1.116 1.47l1.768.35c.716 1.305 2.063 3.568 3.874 5.41.61.63 1.62.07 1.495-.863-.169-1.236-.127-2.565-.064-3.498l10.232 2.006c.821.163 1.579-.537 1.579-1.47V1.493c0-.933-.758-1.633-1.579-1.47zM6.463 9.634c0 .256-.19.466-.42.466H4.315c-.232 0-.421-.21-.421-.467V7.721c0-.257.19-.467.42-.467h1.727c.232 0 .421.21.421.467v1.912zm4.821 0c0 .256-.19.466-.42.466H9.136c-.232 0-.421-.21-.421-.467V7.721c0-.257.19-.467.42-.467h1.727c.232 0 .421.21.421.467v1.912zm4.842 0c0 .256-.19.466-.42.466h-1.727c-.232 0-.421-.21-.421-.467V7.721c0-.257.19-.467.42-.467h1.706c.232 0 .421.21.421.467v1.912h.021z"
      ></path>
    </svg>
         
        </button>
        <button className="h-10 w-10 bg-gray-200 rounded-full grid place-items-center">
          <RiArrowDownSFill size={35}/>
        </button>
      </div>
      <div className="block lg:hidden px-4 py-2">
				<div className="w-full flex items-center bg-gray-100 px-4 rounded-md">
					<FaSearch color="gray" />
					<input
						type="text"
						className="rounded-md bg-gray-100 pl-2 py-2 w-full text-sm outline-none"
						placeholder="Search features, tutorials, etc."
					/>
				</div>
			</div>
    </nav>
  );
};

export default Navbar;
