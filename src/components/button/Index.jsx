import React from "react";

const Button = ({ title, cClass, onPress }) => {
  return (
    <button className={cClass} onClick={onPress}>
      {title}
    </button>
  );
};

export default Button;
