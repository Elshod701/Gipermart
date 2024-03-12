import React from "react";
import { useNavigate } from "react-router-dom";

const UseCheckToken = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [token]);
  return <div></div>;
};

export default UseCheckToken;
