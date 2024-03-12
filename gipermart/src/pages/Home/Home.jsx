import React from "react";
import Slider from "react-slick";
import AboutCard from "../About/AboutCard/AboutCard";
import Sale from "../../components/Sale/Sale";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useGetAllBanner } from "../../service/query/useGetAllBanner";
import { useGetCategory } from "../../service/query/useGetGategory";
import { useGetTel } from "../../service/query/useGetTel";
import { LaptopVariant } from "./HomeCards/LaptopVariant";
import { PhoneVariant } from "./HomeCards/PhoneVariant";
import { useGetLaptop } from "../../service/query/useGetLaptop";
import { useGetBrands } from "../../service/query/useGetBrands";
import { BrandCard } from "./HomeCards/BrandCard";

const Home = () => {
  const { data: banner } = useGetAllBanner();
  const { data: category } = useGetCategory();
  const { data: tel } = useGetTel();
  const { data: laptop } = useGetLaptop();
  const { data: brand } = useGetBrands();

  var settingss = {
    className: "center",
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 5,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  var settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <section className="mx-auto">
        <div className="container">
          <Slider {...settings}>
            {banner?.map((e) => (
              <div key={nanoid()}>
                <img src={e.img} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className=" mt-[50px] py-4 ">
        <div className="container bg-white">
          <Slider {...settingss}>
            {category?.map((e) => (
              <Link to={`about/${e.datakey}`} key={e.datakey}>
                <div id="categ-card">
                  <img
                    className="w-[76px] h-[76px] bg-cover bg-center"
                    src={e.img}
                    id="categ-img"
                  />
                  <p className="text-[16px] text-center font-jost-medium leading-[22px]">
                    {e.title}
                  </p>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </section>

      <section className="mx-auto py-4">
        <div className="container">
          <h1 className="text-[24px] font-jost-semibold pb-5">
            Смартфоны и планшеты
          </h1>
          <Slider {...settingss}>
            {tel?.slice(0, 5).map((e) => (
              <AboutCard {...e} key={nanoid()} />
            ))}
          </Slider>
        </div>
      </section>

      <section className="bg-[#FEEE00] flex items-center justify-center pt-4 pb-8 ">
        <Sale />
      </section>

      <section>
        <div className="container">
          <div className="flex items-center justify-between pt-[48px] pb-[64px]">
            <div className="flex flex-col items-start">
              <h2 className="font-jost-regular text-2xl pb-2 border-b border-solid border-[#EDEDED] w-[100%]">
                Смартфоны и планшеты
              </h2>
              <div className="flex flex-col gap-5 py-5">
                {tel?.slice(0, 3).map((e) => (
                  <PhoneVariant {...e} key={nanoid()} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start w-[400px]">
              <h2 className="font-jost-regular text-2xl pb-2 border-b border-solid border-[#EDEDED] w-[100%]">
                Ноутбуки, планшеты и компьютеры
              </h2>
              <div className="flex flex-col gap-5 py-5">
                {laptop?.slice(0, 3).map((e) => (
                  <LaptopVariant {...e} key={nanoid()} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start">
              <h2 className="font-jost-regular text-2xl pb-2 border-b border-solid border-[#EDEDED] w-[100%]">
                Смартфоны и планшеты
              </h2>
              <div className="flex flex-col gap-5 py-5">
                {tel?.slice(3, 6).map((e) => (
                  <PhoneVariant {...e} key={nanoid()} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto py-8">
        <div className="container">
          <h1 className="text-[24px] font-jost-semibold pb-5">
            Смартфоны и планшеты
          </h1>
          <Slider {...settingss}>
            {tel?.slice(0, 5).map((e) => (
              <AboutCard {...e} key={nanoid()} />
            ))}
          </Slider>
        </div>
      </section>

      <section className="mx-auto py-8">
        <div className="container">
          <h1 className="text-[24px] font-jost-semibold pb-5">
            Ноутбуки, планшеты и компьютеры
          </h1>
          <Slider {...settingss}>
            {laptop?.slice(0, 5).map((e) => (
              <AboutCard {...e} key={nanoid()} />
            ))}
          </Slider>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <h1 className="text-[24px] font-jost-semibold pb-5">
            Популярные бренды
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-4">
            {brand?.map((e) => (
              <BrandCard {...e} key={nanoid()} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
