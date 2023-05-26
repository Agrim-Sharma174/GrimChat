// import Image from "next/image";
// import React from "react";
// const Card = ({ name, imageURL }) => {
// return (
//   <div
//   className="flex items-center w-full border-b rounded-xl border-[#2b2b2b] space-x-5 py-2 px-2 my-5 cursor-pointer hover:bg-[#141414b7]"
//   >
//     <div className="w-[60px] h-[60px] overflow-hidden rounded-full border border-[#2b2b2b]">
//       <Image src={imageURL} alt="pic" width={60} height={60}/>
//     </div>
//     <div>
//       <span>{name}</span>
//     </div>
//   </div>
//   );
// };

// export default Card;

import Image from "next/image";
import React from "react";
const Card = ({ user, currentUser, setSearch }) => {
  return (
    <div className="flex items-center w-full border-b rounded-xl border-[#2b2b2b] space-x-5 py-2 px-2 my-5 cursor-pointer hover:bg-[#141414b7]">
      <div className="w-[60px] h-[60px] overflow-hidden rounded-full">
        <Image src={user?.data().photoURL} width={60} height={60} />
      </div>
      <div>
        <h1>{user?.data().name}</h1>
      </div>
    </div>
  );
};

export default Card;
