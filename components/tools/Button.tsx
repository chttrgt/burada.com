import React, { FC, MouseEvent } from "react";
// import { IconType } from "react-icons";

interface IButtonProps {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  //   icon?: IconType;
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({
  text,
  //   icon:Icon,
  onClick,
  disabled,
  outline,
  small,
}) => {
  return (
    <button
      className={`rounded-lg p-3 ${small ? "w-[250px]" : "w-full"} ${outline ? "border text-black" : "bg-black text-white"} `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
