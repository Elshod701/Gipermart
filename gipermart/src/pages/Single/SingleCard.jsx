import React from "react";
import stars from "../../assets/images/stars.svg";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const SingleCard = ({ title, id, img, price }) => {
  const [more, setMore] = React.useState(false);

  const More = () => {
    setMore(!more);
  };

  return (
    <div className="single-card ">
      <h1 className="font-jost-semibold text-2xl py-4">{title}</h1>
      <div className="flex items-center justify-between pb-4 border-b border-[3px solid] border-gray-300">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 ">
            <img src={stars} alt="rating" />
            <span className="text-[#76BC21] text-base font-jost-regular">
              (0)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CiHeart />
            <span>В избранное</span>
          </div>
        </div>
        <p className="text-sm">
          id: <span className="text-base font-jost-medium">{id}</span>
        </p>
      </div>

      <div className="informations pt-[20px] flex items-start justify-between">
        <div>
          <img
            className="w-[435px] h-[435px] object-cover object-center"
            src={img}
            alt=""
          />
        </div>
        <div className="characters">
          <div className="flex flex-col text-base font-jost-medium">
            Объем памяти
            <p className="border-solid border-[3px] border-red-500 w-[80px] flex items-center justify-center py-1">
              128GB
            </p>
          </div>
          <div className="mt-6 text-xl font-jost-medium flex flex-col items-start gap-2">
            <h3>Характеристики</h3>
            <div>
              <p className="text-base text-[#999999]">
                Цвет:
                <span className="text-[#333333] font-jost-medium ">белый</span>
              </p>
            </div>
            <div>
              <p className="text-base text-[#999999]">
                экран:
                <span className="text-[#333333] font-jost-medium ">
                  6.2"/2400x1080 Пикс
                </span>
              </p>
            </div>
            <div>
              <p className="text-base text-[#999999]">
                оперативная память:
                <span className="text-[#333333] font-jost-medium ">8GB</span>
              </p>
            </div>
            <div>
              <p className="text-base text-[#999999]">
                память:
                <span className="text-[#333333] font-jost-medium ">128GB</span>
              </p>
            </div>
            <div>
              <p className="text-base text-[#999999]">
                4 камеры:
                <span className="text-[#333333] font-jost-medium ">
                  64/12/12
                </span>
              </p>
            </div>
            <div>
              <p className="text-base text-[#999999]">
                беспроводные интерфейсы:
                <span className="text-[#333333] font-jost-medium ">
                  NFC, Wi-Fi, Bluetooth 5.0
                </span>
              </p>
            </div>

            <button
              onClick={() => More(!more)}
              className="text-base font-jost-medium flex items-center text-[#E44542]"
            >
              Все характеристики ▾
            </button>
            {more && (
              <div>
                <p className="text-base text-[#999999]">
                  беспроводные интерфейсы:
                  <span className="text-[#333333] font-jost-medium ">
                    NFC, Wi-Fi, Bluetooth 5.0
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="addToCart flex flex-col justify-between w-[340px] h-[167px] border-solid border-2 border-gray-200 py-3 px-5">
          <div className="flex items-center justify-between">
            <strike className="text-[#999999] font-jost-medium text-[20px]">
              {price} USD
            </strike>
            <span className="bg-red-500 px-2 text-white">-9%</span>
          </div>
          <p className="text-[#333333] font-jost-semibold text-[36px] ">
            {price} USD
          </p>
          <button className="w-[100%] bg-[#FEEE00] flex py-3  justify-center items-center hover:bg-[#fffd79]">
            <Link to="/cart">В корзину</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
