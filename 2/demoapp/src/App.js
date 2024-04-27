import logo from './logo.svg';
import './App.css';

import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Props from './components/PropsComponent';
import Counter from './components/State';
import Image from './components/Image';

function App() {
  return (
    <div className="App flex flex-wrap">
        <Props name="Anchit" />
        <Props name="Akshat" />
        <Props name="Oshi" />
        <Props name="Aman" />
        <Props name="Anil" />

        <Image />
        <hr />
        <Counter />
        
    </div>
  );
}

export default App;
