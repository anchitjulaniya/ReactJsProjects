import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
import { myContext } from './Context';




function AddExpenses() {
    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);
    const {dispatch} = useContext(myContext);

    const onSave = ()=>{
        if(name === ''){
            alert('Please enter name');
        }
        if(cost === 0){
            alert('Please enter cost');
        }
        dispatch({type : "ADD_EXPENSE" ,payload : {
            name: name,
            cost : cost,
            id: name+cost
        }})
    }

  return (
    <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-semibold'>Add Expenses</h1>
        <span className='flex gap-10'>
            <span className='flex flex-col'>
                <p>Name</p>
                <input className='outline-none border border-black py-1 rounded-lg px-2' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name' type="text" />
            </span>
            <span className='flex flex-col'>
                <p>Cost</p>
                <input className='outline-none border border-black py-1 rounded-lg px-2' min={0} onChange={e => {setCost(e.target.value)}} value={cost} placeholder='Cost' type="number" />
            </span>
        </span>
        <button onClick={onSave} className='px-16 py-2 font-semibold bg-blue-500 text-white rounded w-[180px]'>Save</button>
    </div>
  )
}

export default AddExpenses