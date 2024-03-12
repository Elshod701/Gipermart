import React from "react";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Single from "./pages/Single/Single";
import Cart from "./pages/Cart/Cart";
import UseScroll from "./hooks/UseScroll";

const App = () => {
  return (
    <>
      <UseScroll />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about/:datakey" element={<About />} />
          <Route path="single/:brand/:id" element={<Single />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
