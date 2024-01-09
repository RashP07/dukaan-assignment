import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiSpeakerHighLight } from "react-icons/pi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { BsCursor } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiWallet } from "react-icons/ci";
const SIDEBAR = [
  {
    name: "Home",
    icon: <GoHome />,
  },
  {
    name: "Orders",
    icon: <LuClipboardList />,
  },
  {
    name: "Products",
    icon: <LuClipboardList />,
  },
  {
    name: "Delivery",
    icon: <CiDeliveryTruck />,
  },
  {
    name: "Marketing",
    icon: <PiSpeakerHighLight />,
  },
  {
    name: "Analytics",
    icon: <TbBrandGoogleAnalytics />,
  },
  {
    name: "Payments",
    icon: <MdPayments />,
  },
  {
    name: "Tools",
    icon: <BsCursor />,
  },
  {
    name: "Discount",
    icon: <CiDiscount1 />,
  },
  {
    name: "Audience",
    icon: <TbUsers />,
  },
  {
    name: "Appearance",
    icon: <IoColorPaletteOutline />,
  },
  {
    name: "Plugins",
    icon: <AiOutlineThunderbolt />,
  },
];

const Sidebar = () => {
  
  return (

    <nav className="hidden p-6 w-63 sticky bg-[#1E2640] lg:flex flex-col gap-4 top-0 left-0 h-screen ">
      <div className="flex">
        <div className="w-10 h-10 bg-white rounded-md overflow-hidden">
          <img
            src="https://scontent.fixc1-8.fna.fbcdn.net/v/t39.30808-6/305842526_480112457462860_1258181700195647656_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ATmvsDqagZkAX9h7XJ7&_nc_ht=scontent.fixc1-8.fna&oh=00_AfC5ffU6XRmWPOZY9k-FE1WjXC2vHfans5qeVpZvn-D2ww&oe=65A1C07B"
            alt="Nishyan"
            className="h-12 rounded-md mr-4"
          />
        </div>
        <div className="flex flex-col ml-4 items-start justify-center text-white">
          <span className="text-[15px]">Nishyan</span>
          <span className="text-gray-300 pt-2 text-[13px] font-normal leading-4 underline hover:cursor-pointer whitespace-nowrap">
            visit store
          </span>
        </div>

        <RiArrowDropDownLine
          className="ml-14 text-white text-2xl hover:cursor-pointer"
          size="40"
        />
      </div>
      <section className="flex flex-col justify-between">
        {SIDEBAR.map((el, index) => (
          <div key={index} className="px-4 py-2 flex gap-1 hover:cursor-pointer font-medium">
            <span className="text-gray-300 text-lg self-center mr-3">
              {el.icon}
            </span>
            <span className="text-gray-300 text-lg">{el.name}</span>
          </div>
        ))}
      </section>
    <div className="md:fixed bottom-1 rounded-md items-center bg-gray-700 flex gap-2 p-2">
        <div className=" h-10 w-10 flex items-center bg-white bg-opacity-10 justify-center rounded-md m-2">
          <CiWallet color="white" fontSize={30} />
        </div>
        <div>
          <span className="text-xm hover:cursor-pointer text-white text-opacity-80 ">Available Credits</span>
          <p className="text-gray-300 font-medium">222.10</p>
        </div>
      </div>  
      	
  </nav>

  );
};

export default Sidebar;
