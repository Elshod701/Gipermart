import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
const NavTop = () => {
  return (
    <>
      <div className="nav-top py-2 flex items-center justify-end gap-6 font-jost-regular text-base cursor-pointer">
        <p>Доставка и оплата</p>
        <p>Пункты выдачи</p>
        <p>Поддержка</p>
        <div className="flex items-center gap-4 font-jost-regular text-base">
          <FaPhoneAlt />
          <a href="tel:+998902537753">+998 90 253 77 53</a>
        </div>
      </div>
    </>
  );
};

export default NavTop;
