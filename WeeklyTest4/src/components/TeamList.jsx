import { useContext } from 'react'
// import { EmployeeContext } from '../context/Context';

function TeamList() {
    
  
    return (
      <div className="w-1/2 bg-gray-100 h-[100%] p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Team Members</h2>
        <button
         
          className="mb-4 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          Sort by Age
        </button>
        
        <div className="mt-4">
          <h3 className="text-xl">Average Age: </h3>
        </div>
      </div>
    );
  }

export default TeamList