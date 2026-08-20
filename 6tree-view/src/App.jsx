import { useState } from "react";
import './App.css'
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App"></div>

       <TreeView menus={menus} /> 
    </>
  )

}

export default App;