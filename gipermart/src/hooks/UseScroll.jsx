import React from "react";
import { useLocation } from "react-router-dom";

const UseScroll = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

export default UseScroll;
