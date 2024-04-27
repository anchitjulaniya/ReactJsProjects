import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile';
import A from './component/A';
import B from './component/B';
import {useState} from 'react';
import List from './component/List';
import Products from './component/Products';
function App() {
  
  const [st, setState] = useState(true);
  return (
    <div className="App">
      {/* {st? <A />: <B />}
      <button onClick={()=>{setState(true)}}>Show A</button>
      <button onClick={()=>{setState(false)}}>Show B</button> */}

        {/* -------- */}
        {/* <List /> */}

        <Products />
        <hr />
    </div>
  );
}

export default App;
