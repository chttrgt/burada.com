import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <div className="cursor-pointer rounded-md bg-orange-700 px-4 py-2 text-lg md:text-2xl">
        burada<span className="text-sm md:text-lg">.com</span>
      </div>
    </Link>
  );
}
