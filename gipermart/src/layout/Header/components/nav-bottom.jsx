import React from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useRef } from "react";
import { request } from "../../../config/request";
import logo from "../../../assets/icons/logo.svg";
import axios from "axios";

const NavBottom = () => {
  const inputRef = useRef();
  const [number, setNumber] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleHide = () => {
    inputRef.current.style.display = "none";
  };

  const handleOpen = () => {
    inputRef.current.style.display = "block";
  };

  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      password: password,
      number: number,
    };
    axios
      .post("http://localhost:3000/users", { data })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="nav-bottom py-4 flex items-center justify-between">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="My Logo" />
          </div>
        </Link>
        <button className="flex items-center gap-2 py-3 px-3 bg-[#FEEE00] w-[150px] hover:bg-yellow-200">
          <IoMenu />
          <p className="text-xl">Каталог</p>
        </button>

        <div className="flex items-center justify-between border-2 border-[#857372 solid] bg-white px-3 py-3 font-jost-regular w-[600px]">
          <input
            type="text"
            className="outline-none bg-transparent pr-2 flex-grow"
            placeholder="Поиск"
          />
          <IoMdSearch className="text-3xl" />
        </div>
        <div className="frame flex items-center gap-8">
          <div
            onClick={handleOpen}
            className="flex items-center gap-[6px] flex-col cursor-pointer"
          >
            <FaRegUserCircle className="text-2xl" />
            <p>Войти</p>
          </div>
          <div className="flex items-center gap-[6px] flex-col px-3">
            <FaRegHeart className="text-2xl" />
            <p>Избранное</p>
          </div>
          <div className="flex items-center gap-[6px] flex-col px-3">
            <RiShoppingCart2Line className="text-2xl" />
            <p>Корзина</p>
          </div>
        </div>
      </div>
      <div>
        <div
          ref={inputRef}
          className="div relative top-[-130px] right-[-50px] none"
        >
          <div
            id="login"
            className="w-[346px] h-[80vh] absolute top-[0%] right-[0%]  bg-white py-4 px-6 shadow-xl"
          >
            <button
              onClick={handleHide}
              className="flex justify-end items-center w-[100%]"
            >
              <IoMdClose className="p-1 text-[24px] hover:bg-red-500  hover:text-white" />
            </button>
            <h2 className="font-jost-medium text-xl text-center pb-5">
              Войти или создать профиль
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="number">
                  Номер телефона
                  <input
                    onChange={(e) => setNumber(e.target.value)}
                    className="login_input block w-[100%] mt-3 px-4 py-2 outline-none"
                    type="number"
                    placeholder="+998"
                  />
                </label>
              </div>

              <div>
                <label htmlFor="password">
                  Пароль
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="login_input block w-[100%] mt-3 px-4 py-2 border-solid border-[#808080 2px] outline-none text-xl"
                    type="password"
                    placeholder="Enter password"
                  />
                </label>
              </div>

              <div className="btns mt-10 flex flex-col gap-4">
                <button className="text-lg font-jost-medium flex items-center justify-center w-[100%] py-3 bg-[#FEEE00]">
                  Войти
                </button>
                <button className="text-lg font-jost-medium flex items-center justify-center w-[100%] py-3 bg-white border border-[#000]">
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBottom;
