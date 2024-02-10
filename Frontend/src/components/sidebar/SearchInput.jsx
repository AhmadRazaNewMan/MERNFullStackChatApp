import {React,useState} from 'react'
import {IoSearchSharp} from 'react-icons/io5'
import useConversation from  "../../zustand/useConversation"
import useGetConversation from '../../hooks/useGetConversation'
import toast from 'react-hot-toast'
const SearchInput = () => {
  const  [search, setSearch] = useState('')
  const {setSelectedConversation} = useConversation()
  const  {conversation} = useGetConversation(10)
  const handleSubmit =(e)=>{
   
    e.preventDefault()
    if(!search) return;
    if(search.length < 3){
      return toast.error ('Search term must be at least 3 characters long')

    }
    const conversations = conversation.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversations){
      setSelectedConversation(conversations);
      setSearch("")

    }
    else{
      toast.error("No such User Found!")
    }

  }
  return (
    <form onSubmit={handleSubmit} className='flex gap-2 items-center'>
        <input type='text' placeholder='Search....'value={search} onChange={(e)=>setSearch(e.target.value)} className='input input-borderd rounded-full' >
        </input>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp className="w-6 h-6 outline-none">

            </IoSearchSharp>
        </button>
      
    </form>
  )
}

export default SearchInput
