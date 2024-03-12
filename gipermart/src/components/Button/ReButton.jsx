import React, { Children } from "react";

const ReButton = ({ Children, onClick, type }) => {
  return (
    <button onClick={onClick} type={type}>
      {Children}
    </button>
  );
};

export default ReButton;
