import Starfield from 'react-starfield';
import Ui from './Ui';


function App() {
 

  return (
    <div className="App">
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      {/* Other components */}
      
      <Ui />
    </div>
  );
}

export default App;