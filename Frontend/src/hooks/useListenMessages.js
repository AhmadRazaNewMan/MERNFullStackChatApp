import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation'

import notification from '../../src/assets/sounds/notification.mp3'


const useListenMessages = () => {
 const {socket}  =useSocketContext

 const {messages,setMessage} = useConversation()

 useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        newMessage.shouldShake = true
        const sound  =new Audio (notification)
        sound.play()
        setMessage([...messages,newMessage])
    })

    return() =>socket?.off("newMessages")
 },[socket,setMessage,messages])

}

export default useListenMessages
