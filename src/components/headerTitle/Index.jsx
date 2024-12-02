import React from "react";
import  "./index.css"

const HeaderTitle = ({ text, style }) => {
  return <h2 style={style}>{!text ? "N/A" : text}</h2>;
};

export default HeaderTitle;
