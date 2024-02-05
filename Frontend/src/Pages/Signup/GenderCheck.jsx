import React from 'react'

const GenderCheck = () => {
  return (
    <div className='flex'>
        <div className="form-control">
            <div className="form-control">
                <label htmlFor="male" className='label gap-2 cursor-pointer '>
                    <span className='label-text  text-gray-100'>Male</span>
                    <input type="checkbox" className='checkbox border-slate-900'  id="male"/> 
                </label>
            </div>
           

        </div>
        <div className="form-control">
            <div className="form-control">
                <label htmlFor="male" className='label gap-2 cursor-pointer '>
                    <span className='label-text text-gray-100'>Male</span>
                    <input type="checkbox" className='checkbox border-slate-900'  id="male"/> 
                </label>
            </div>
           

        </div>

      
    </div>
  )
}

export default GenderCheck
