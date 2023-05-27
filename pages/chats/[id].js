import Message from "@/components/Message";
import Image from "next/image";
import React from "react";
import { MdSend } from "react-icons/md";

const Id = () => {
  return ( 
    <div className="gradient w-full h-screen overflow-hidden">
      <div
        className="w-full p-5 bg-[#00000044] backdrop-blur-sm flex items-center space-x-5
      "
      >
        <div>
          <Image
            src={"/images/default.png"}
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
        <div>
            <div>Agrim</div>
            <div>last seen at 20:31 on 17/01/2004</div>
        </div>
      </div>
      <div className="w-full h-[78vh] overflow-y-auto overflow-x-hidden p-5">
        <div className="w-full flex justify-end">
            <Message />
        </div>
      </div>
      <div className="w-full p-5 lg:p-0 bg-[#00000044] backdrop-blur-sm h-full">
      <div className="flex items-center relative">
          <input
            type="text"
            className="w-full border pr-10 pl-5 py-4 bg-transparent rounded-full outline-none focus:border-[#00ad03]"
            
            placeholder="Type Here"
            required
          />
          <button className="text-3xl absolute right-4">
            <MdSend />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Id;
