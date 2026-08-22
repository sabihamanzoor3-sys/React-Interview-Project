import { useState } from "react";
import './App.css'
import Random from './components/Random-color'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App"></div>

     <Random/>
    </>
  )

}

export default App;
