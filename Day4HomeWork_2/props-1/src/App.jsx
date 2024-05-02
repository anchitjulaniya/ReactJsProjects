import Card from "./Card"
import Colors from "./Colorlist"

function App() {
  
  return (
    <div className="px-20 py-10 flex justify-center flex-wrap gap-8">
      {
        Colors.map((props) => <Card key={props.name} {...props} />)
      }
    </div>
  )
}

export default App
