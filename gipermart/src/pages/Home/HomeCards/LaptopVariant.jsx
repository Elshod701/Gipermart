import React from "react";

export const LaptopVariant = ({ img, title, price }) => {
  return (
    <div className="w-[413px] h-[157px] flex items-start justify-between px-1 py-2">
      <img src={img} className="w-[140px] h-[140px]" alt="card-image" />
      <div className="w-[249px] flex flex-col justify-between h-[129px]">
        <p className="text-[18px] font-jost-regular">{title}</p>
        <div className="flex items-center gap-2">
          <p className="font-jost-semibold text-lg">{price} $</p>
          <strike className="text-[#999999] font-jost-regular text-[14px]">
            {price} $
          </strike>
        </div>
      </div>
    </div>
  );
};
