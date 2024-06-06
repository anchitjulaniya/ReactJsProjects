import React from 'react'
import {useContext} from 'react'
import { myContext } from './Context'

function Expenses() {
    const {state, dispatch} = useContext(myContext);
  return (
    <div className='py-10'>
        <h1 className='text-3xl font-semibold mb-5'>Expenses</h1>
        {state.expense === 0 ? <div className='text-green-400 font-semibold text-2xl'>No Expenses added</div> : 
        state.expense.map((expense) => {
            return (
                <div key={expense} className='flex justify-between py-3 bg-[rgba(0,0,0,0.1)] rounded-2xl px-5'>
                    <div className='flex justify-between py-3'>
                        <span>{expense.name}</span>
                        <span>{expense.amount}</span>
                    </div>
                    <button onClick={()=>{
                        dispatch({type:"DELETE_EXPENSE" , payload : {id : expense.id}})}}>
                    ❌</button>
                </div>
            )
        })
        }
    </div>
  )
}

export default Expenses