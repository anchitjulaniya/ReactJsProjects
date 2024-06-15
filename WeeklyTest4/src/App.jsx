
import './App.css'
import EmplyoeeList from './components/EmployeeList'
import TeamList from './components/TeamList'


function App() {

  return (
    <>
      <div className='w-[80%] mx-auto gap-36 flex justify-evenly items-start py-10'>
       
          <EmplyoeeList />
          <TeamList />
        
      </div>
    </>
  )
}

export default App
