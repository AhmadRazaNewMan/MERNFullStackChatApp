import React from 'react'
import SearchInput from './sidebar/SearchInput'
import Conversations from './sidebar/Conversations'


const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4'>
    <SearchInput/>
    <div className='divider px-3'></div>
     <Conversations/>
    {/* <Logout/> */} 
    </div>
  )
}

export default Sidebar
