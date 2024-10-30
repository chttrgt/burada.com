import React, { FC } from "react";
import { CardProductProps } from "@/container/product/ProductDetailContainer";

interface ICounterProps {
  cardProduct: CardProductProps;
  increaseFunc: () => void;
  decreaseFunc: () => void;
}

const Counter: FC<ICounterProps> = ({
  cardProduct,
  increaseFunc,
  decreaseFunc,
}) => {
  const buttonStyle =
    "flex size-8 items-center justify-center rounded-md border cursor-pointer font-bold";
  return (
    <div className="flex items-center gap-2">
      <div onClick={decreaseFunc} className={buttonStyle}>
        -
      </div>
      <div className="text-lg md:text-xl">{cardProduct?.quantity}</div>
      <div onClick={increaseFunc} className={buttonStyle}>
        +
      </div>
    </div>
  );
};

export default Counter;
