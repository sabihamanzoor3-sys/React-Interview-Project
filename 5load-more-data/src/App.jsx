import { useState } from "react";
import './App.css'
import LoadMoreData from "./components/Load-more-data";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App"></div>

       <LoadMoreData/> 
    </>
  )

}

export default App;