import React from 'react'
import {IoSearchSharp} from 'react-icons/io5'
const SearchInput = () => {
  return (
    <form className='flex gap-2 items-center'>
        <input type='text' placeholder='Search....' className='input input-borderd rounded-full' >
        </input>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp className="w-6 h-6 outline-none">

            </IoSearchSharp>
        </button>
      
    </form>
  )
}

export default SearchInput
