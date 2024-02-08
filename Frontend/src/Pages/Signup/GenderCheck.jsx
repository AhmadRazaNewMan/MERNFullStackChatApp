import React from 'react'

const GenderCheck = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className="form-control">
            <div className="form-control">
                <label htmlFor="male" className={`label gap-2 cursor-pointer ${selectedGender==='male?" "selected" :"'}`}>
                    <span className='label-text  text-gray-100'>Male</span>
                    <input type="checkbox" className='checkbox border-slate-900'  id="male" checked={selectedGender==="male"}
                    onChange={()=>onCheckboxChange("male")}/> 
                </label>
            </div>
           

        </div>
        <div className="form-control">
            <div className="form-control">
                <label htmlFor="female"className={`label gap-2 cursor-pointer ${selectedGender==='female?" "selected" :"'}`}>
                    <span className='label-text text-gray-100'>Female</span>
                    <input type="checkbox" className='checkbox border-slate-900' checked={selectedGender==="female"}  id="female"
                      onChange={()=>onCheckboxChange("female")}/> 
                </label>
            </div>
           

        </div>

      
    </div>
  )
}

export default GenderCheck
