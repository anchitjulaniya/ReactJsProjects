import { createContext } from "react";

export const myContext = createContext();

export const initializer = {
    expense:[],
    budget : 2000,
    remaining : 2000,
    spent: 0
}

export const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
            return {
                ...state,
                expense: [...state.expense, action.payload],
                remaining: state.remaining - action.payload.cost,
                spent : parseInt(state.spent) + parseInt(action.payload.cost)
            }

        case "DELETE_EXPENSE": 
        {
            let arr = state.expense.filter(exp => exp.id != action.payload.id);
            return {
                ...state,
                expense : [...arr],
                remaining : parseInt(state.remaining) + parseInt(action.payload.cost),
                spent : parseInt(state.spent) - parseInt(action.payload.cost)
            }
        }
        
        default:
            return state
           
    }
}