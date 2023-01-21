import React from "react";
import "./button.scss";

const Button = (props) => {
  return <button {...props} className={`button` + props.className} />;
};

export default Button;
