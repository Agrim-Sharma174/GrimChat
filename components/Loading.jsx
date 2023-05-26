import Image from "next/image";
import React from "react";

const Loadng = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#161621]">
      <Image src={"/gifs/Loading.gif"} alt="" width={800} height={600} />
    </div>
  );
};

export default Loadng;
