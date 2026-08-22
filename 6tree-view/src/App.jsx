import { useState } from "react";
import './App.css'
import TreeView from "./components/Tree-view";
import menus from "./components/Tree-view/Data";

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
