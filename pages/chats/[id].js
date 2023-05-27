import Message from "@/components/Message";
import Image from "next/image";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import {
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

export async function getServerSideProps(context) {
  const id = context.query.id;
  //   const docRef = doc(db, "chats", id);
  //   const docSnap = await getDoc(docRef);
  //   const chatData = JSON.stringify(docSnap?.data());

  return {
    props: {
      id,
      //   chatData,
    }, // will be passed to the page component as props
  };
}

const Id = ({ id }) => {
  const [message, setMessage] = useState("");
  const [user, loading] = useAuthState(auth);

  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"));
  const [messageSnapshots, loading2] = useCollection(q);

  const createMessage = async (e) => {
    e.preventDefault();
    // this below code do make a collection of messages  and then we import db means database then inside the func. we giving messages
    const docRef = await addDoc(collection(db, "messages"), {
      message: message,
      user: user?.email,
      chatId: id,
      createdAt: serverTimestamp(),
    });
    setMessage("");
  };
  return (
    <div className="gradient w-full h-screen overflow-hidden">
      <div className="w-full p-5 bg-[#00000044] backdrop-blur-sm flex items-center space-x-5">
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
        {messageSnapshots?.docs?.map((msg) => {
          return (
            <div className="w-full flex justify-end">
              <Message msg={msg} />
            </div>
          );
        })}
      </div>
      <form
        onSubmit={createMessage}
        className="w-full p-5 lg:p-0 bg-[#00000044] backdrop-blur-sm h-full"
      >
        <div className="flex items-center relative">
          <input
            type="text"
            className="w-full border pr-10 pl-5 py-4 bg-transparent rounded-full outline-none focus:border-[#00ad03]"
            placeholder="Type Here"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            required
          />
          <button className="text-3xl absolute right-4">
            <MdSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Id;
