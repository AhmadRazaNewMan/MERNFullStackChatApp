import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastIndex, emojis }) => {
    const { selectedConversation, setSelectedConversation } = useConversation(state => state); 
    const {onlineUsers} = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)

    const isSelected = selectedConversation && selectedConversation._id === conversation._id; 

    const handleClick = () => {
        setSelectedConversation(conversation); 
    };

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`} onClick={handleClick}>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} alt="user avatar" />
                    </div>
                </div >
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'>{emojis}</span>
                    </div>
                </div>
            </div>
            {!lastIndex && <div className='divider my-0 py-0 h-1'></div>}
        </>
    );
}

export default Conversation;
