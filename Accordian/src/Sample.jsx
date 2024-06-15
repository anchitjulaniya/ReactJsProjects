import { useState, useEffect } from 'react'
  
function Sample() {

      const [count, setCount] = useState(0);
    
      useEffect(() => {
        // This will run both on mount and update
        document.title = `You clicked ${count} times`;
    
        // Cleanup function to mimic componentWillUnmount
        return () => {
          console.log('Cleanup');
        };
      }, [count]); // Only re-run the effect if count changes
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      );
    }
    

export default Sample