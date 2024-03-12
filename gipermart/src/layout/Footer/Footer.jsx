import React from "react";
import logo from "../../assets/icons/logo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareOdnoklassniki } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import humo from "../../assets/images/humo.svg";
import payme from "../../assets/images/payme.svg";
import uzcard from "../../assets/images/uzcard.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F5F5F6] px-[40px] py-[40px] mt-10">
        <div className="container ">
          <ul className="footer-lists flex items-start justify-between">
            <li className="footer-item flex flex-col">
              <img src={logo} />
              <div className="flex justify-start flex-col mb-3">
                <a
                  className="text-[21px] font-jost-medium"
                  href="tel:+99 893 374-66-44"
                >
                  +99 893 374-66-44
                </a>
                <span className="font-jost-regular text-[14px]">
                  справочная служба
                </span>
              </div>
              <div className="flex justify-start flex-col mb-4">
                <a
                  className="text-[21px] font-jost-medium"
                  href="tel:+99 890 253-77-53"
                >
                  +99 890 253-77-53
                </a>
                <span className="font-jost-regular text-[14px]">
                  интернет-магазин
                </span>
              </div>
              <div className="social_brands flex items-center gap-4 ">
                <FaFacebookSquare className="text-4xl" />
                <FaSquareOdnoklassniki className="text-4xl" />
                <BsTelegram className="text-4xl" />
                <FaYoutube className="text-4xl" />
                <FaSquareInstagram className="text-4xl" />
              </div>
            </li>
            <li className="footer-item flex flex-col text-[#333333] leading-[40px] font-jost-regular text-base">
              <p>Условия обмена и возврата</p>
              <p>Каталог</p>
              <p>О компании</p>
              <p>Контакты</p>
              <p>Доставка</p>
              <p>Оплата</p>
            </li>
            <li className="footer-item flex flex-col text-[#333333] leading-[40px] font-jost-regular text-base">
              <p>Клиентам</p>
              <p>Личный кабинет</p>
              <p>Блог</p>
              <p>Обратная связь</p>
            </li>
            <li className="footer-item flex flex-col text-[#333333] leading-[40px] font-jost-regular text-base">
              <p>Информация</p>
              <p>Пользовательское соглашение</p>
              <p>Политика конфиденциальности и оферта</p>
            </li>
          </ul>
        </div>
      </footer>
      <div className="bg-[#EAEAEA]">
        <div className="container h-[70px]  px-[60px] mx-auto flex items-center justify-between ">
          <p>
            © 2022 Любое использование контента без письменного разрешения
            запрещено
          </p>
          <div className="flex items-center gap-4">
            <img src={payme} alt="payme" />
            <img src={humo} alt="humo" />
            <img src={uzcard} alt="uzcard" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
