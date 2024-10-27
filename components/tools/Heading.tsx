import React, { FC } from "react";

interface IHeadingProps {
  center?: boolean;
  text: string;
}

const Heading: FC<IHeadingProps> = ({ text, center = false }) => {
  return (
    <div
      className={`${center ? "text-center" : "text-start"} my-3 px-3 text-slate-500 md:my-10 md:px-10 md:text-2xl`}
    >
      {text}
    </div>
  );
};

export default Heading;
