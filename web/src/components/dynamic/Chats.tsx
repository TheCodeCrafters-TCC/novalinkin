import { DynamicWrap } from "@/styles/global";
import React from "react";
import ChatsBar from "../chats/ChatsBar";

const Chats = () => {
  return (
    <DynamicWrap>
      <ChatsBar />
    </DynamicWrap>
  );
};

export default Chats;
