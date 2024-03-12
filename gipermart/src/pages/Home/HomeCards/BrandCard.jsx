import React from "react";

export const BrandCard = ({ img }) => {
  return (
    <div className="w-[181px] h-[90px] flex items-center justify-center">
      <img src={img} alt="" />
    </div>
  );
};
