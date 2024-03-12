import React from "react";
import banner1 from "../../assets/images/aksiya_banner1.png";
import banner2 from "../../assets/images/aksiya_banner2.png";
import banner3 from "../../assets/images/aksiya_banner3.png";

const Sale = () => {
  return (
    <div className="container">
      <h1 className="text-2xl font-jost-semibold mb-6">Акции</h1>
      <div className="flex items-center justify-between w-auto">
        <img
          className="w-[400px] h-[240px] object-cover object-center"
          src={banner1}
          alt="banner1"
        />
        <img
          className="w-[400px] h-[240px] object-cover object-center"
          src={banner2}
          alt="banner2"
        />
        <img
          className="w-[400px] h-[240px] object-cover object-center"
          src={banner3}
          alt="banner3"
        />
      </div>
    </div>
  );
};

export default Sale;
