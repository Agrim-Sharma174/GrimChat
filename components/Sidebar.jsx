import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import { signOut } from "firebase/auth";
import Card from "./Card";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import CardLoader from "./CardLoader";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [currentUser, loading2] = useAuthState(auth);
  const Logout = async () => {
    if (currentUser) {
      setDoc(
        doc(db, "users", currentUser.uid),
        {
          email: currentUser.email,
          photoURL: currentUser.photoURL,
          name: currentUser.providerData[0].displayName,
          lastSeen: serverTimestamp(),
          online: false,
        },
        { merge: true }
      );
    }
    await signOut(auth);
  };

  const usersRef = collection(db, "users");
  const [userSnapshots, loading] = useCollection(usersRef);

  return (
    <div className="w-[40%] h-screen p-5 bg-[#191919]">
      <div className="flex items-center w-full space-x-4">
        <div>
          <button className="drop-btn text-2xl">
            <FiMenu />
            <div className="drop-down w-[300px] rounded-b-xl rounded-tr-xl border border-[#333333] bg-[#0000006b] backdrop-blur-sm -z-[1] opacity-0 absolute top-20 left-10 p-5 transition-all">
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto mb-5">
                <Image
                  src={currentUser?.photoURL}
                  alt="profile"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-full text-sm font-light py-2 capitalize">
                {currentUser?.displayName}
              </div>
              <div
                className="w-full text-sm font-light py-2 bg-[#3a3a3a42] hover:bg-[#0000003d] border border-[#cacaca] rounded-md capitalize"
                onClick={Logout}
              >
                Logout From your account
              </div>
            </div>
          </button>
        </div>
        <div className="flex items-center w-full relative">
          <div className="absolute text-xl left-3">
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            className="px-10 py-2 rounded-full border border-[#494949] bg-transparent w-full outline-none focus:border-[#cd71ff]"
            placeholder="Search Here"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
          {search.length > 0 && (
            <button
              className="absolute right-5 text-2xl"
              onClick={() => {
                setSearch("");
              }}
            >
              <IoMdClose />
            </button>
          )}
        </div>
      </div>
      <div
        className={
          search !== ""
            ? "w-full h-screen transition-all"
            : "w-full h-0 transition-all overflow-hidden"
        }
      >
        {!loading2 ? (
          userSnapshots?.docs?.map((user) => {
            if (
              user
                .data()
                .name.toLowerCase()
                .includes(search.toLocaleLowerCase()) &&
              user.data().email !== currentUser.email
            ) {
              return (
                <Card
                  key={user.id}
                  user={user}
                  currentUser={currentUser}
                  setSearch={setSearch}
                />
              );
            }
          })
        ) : (
          <div>
            <CardLoader />
            <CardLoader />
            <CardLoader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
