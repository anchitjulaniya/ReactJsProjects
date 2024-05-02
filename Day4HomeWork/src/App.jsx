import { useState } from 'react'
import Profile from './components/Profile'
import Work from './components/Work'
import Skill from './components/Skill'
import Icon from './components/Icon'



function App() {


  return (
    <div className='scale-90'>
      <Profile/>
      <Work/>
      <Skill/>
      <Icon/>
    </div>
  )
}

export default App
