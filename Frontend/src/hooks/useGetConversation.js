import React, { useEffect, useState } from 'react'
import {toast} from 'react-hot-toast'

function useGetConversation() {
    const [loading,setLoading] =useState(false)
    const [conversation,setConversataion] =useState([])

    useEffect(()=>{
       const getConversation=async()=>{
        setLoading(true)
        try {
            const res = await fetch("api/users")
            const data = await res.json()
            if(data.error)
            {
                throw new Error(data.error)
            }
            setConversataion(data)
        } catch (error) {
            toast.error(error.message)

            
        }finally{
          setLoading(false)
            
        }
       }
       getConversation()

    },[])
    return {conversation,loading}

  
}

export default useGetConversation
