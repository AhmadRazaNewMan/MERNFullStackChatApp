import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emojis'

const Conversations = () => {
  const {loading,conversation}  =useGetConversation()
  console.log(conversation)
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversation.map((conversation,index)=>(
        <Conversation key={conversation._id}
        conversation ={conversation}
        emojis={getRandomEmoji()}
        lastIndex = {index===conversation.length -1}
        />

      ))}
      {loading ? <span className='loading loading-spinner mx-auto'>    </span>: "null"}
      
    </div>
  )
}

export default Conversations
