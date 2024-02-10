import React, { useEffect } from "react";
import Messages from "./Messages";
import InputField from "./InputField";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
// import useConversation from '';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation(); 

  useEffect(() => {
    // Cleanup function to reset selectedConversation when component unmounts
    return () => setSelectedConversation(null);
}, [setSelectedConversation]);

  return (
    <div className="md:min-w[450px] lg:w-[1200px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />  
      ) : (
        <>
          {/* HEADER */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold">{selectedConversation.fullName}:</span>
          </div>
          <Messages />
          <InputField />
        </>
      )}
    </div>
  );
};
const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4  sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col item-center text-center gap-2">
        <p>Welcome to john doe</p>
        <p>Select a chat to start messaging </p>
        <TiMessages className="text-3xl md:text-8xl  mx-40 text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
