import React from "react";
const PrimaryButton = ({buttonTitle, handleClick, bgColor}) => {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`text-white ${bgColor} border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
    >
        {buttonTitle}
    </button>
  );
};

export default PrimaryButton;
