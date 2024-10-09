import React from "react";

const Button = ({name, onClick, className}) => {
  return (
    <div
      onClick={onClick}
      className={`${className} text-[18px] font-medium leading-[22px] bg-[#0A106B] hover:bg-[#671E42] text-white duration-[0.4s] px-3 py-4 rounded-md mt-8 text-center`}
    >
      {name}
    </div>
  );
};

export default Button;
