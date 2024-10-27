import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="flex h-[237px] items-center justify-center bg-black">
      <div className="relative h-[187px] w-full">
        <Image
          src="/assets/ust_banner.png"
          fill
          alt="ust_banner"
          className="object-cover"
        />
      </div>
    </div>
  );
}
