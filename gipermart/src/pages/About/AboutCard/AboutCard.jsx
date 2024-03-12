import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdShoppingCart } from "react-icons/md";
const AboutCard = ({ img, title, price }) => {
  return (
    <div className="w-[214px] h-[323px] bg-[#FFFFFF] relative pt-6 pr-4 pb-4 pl-2 hover:bg-[#f8f8f8]">
      <img
        className="w-[165px] h-[165px] object-cover object-center"
        src={img}
        alt=""
      />
      <div className="absolute text-2xl text-gray-600 right-2 top-2 ">
        <CiHeart />
      </div>
      <p className="w-[157px] text-base font-jost-regular py-6">
        {title.split("").length > 35 ? title.slice(0, 35) + "..." : title}
      </p>
      <div className="flex absolute bottom-4 items-end justify-between w-[90%]">
        <p className="font-jost-semibold text-base">{price * 11200} Сум</p>
        <span className="bg-[#FEEE00] px-[10px] py-[7px] text-xl">
          <MdShoppingCart />
        </span>
      </div>
    </div>
  );
};

export default AboutCard;
