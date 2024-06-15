import { createContext } from "react";
import { employees } from "./Employee";

let x = employees.map((emp) => {
  return {
    ...emp,
    added: false,
  };
});

export const  = createContext();

const initializer = {
  employees: x,
  team: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        team: [...state.team, action.payload],
        employees: employees.map((emp) => {
          if (emp.id === action.payload.id) {
            return { ...emp, added: true };
          } else {
            return emp;
          }
        }),
      };
    case "REMOVE":
        return {
            ...state,
            team : team.filter(emp => emp.id != action.payload.id),
            employees : employees.map(emp => {
                if(emp.id === action.payload.id){
                    return {...emp, added : false}
                }
                else{
                    return emp;
                }
            })
            
        }
    case "SORT_BY_AGE":
        return {
            console.log("sort");
        }      

    default :
      return state;   
  }
};
