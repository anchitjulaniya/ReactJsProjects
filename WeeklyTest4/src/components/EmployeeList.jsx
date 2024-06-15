import { useContext } from "react";
import {ContextWeekly} from "./Context";

import { employees } from "./Employee";
// import { EmployeeContext } from "./Context";

function EmplyoeeList() {
    const [state, dispatch] = useContext(ContextWeekly);

    const handleOnClick = (id) => {
        dispatch()
    }

  return (
    <div className="w-1/2 bg-gray-100 p-4 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold mb-4">All Employees</h2>
      <div className="scroll-smooth overflow-auto">
      {employees.map((emp) => {
        return (
          <div key={emp.id} className=" bg-white px-4 py-1 rounded-xl flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <h3 className="text-xl">{emp.first_name }</h3>
              <p className="text-gray-600">{emp.age} years old</p>
            </div>
            <button onClick={() => {console.log("employee add button clicked")}} className= {`${emp.added ? "hidden" : ""} outline-none bg-blue-500 text-white px-4 py-1 rounded`}>Add</button>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default EmplyoeeList;
