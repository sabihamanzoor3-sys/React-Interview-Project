import { useState } from "react";
import './App.css'
import ImageSlider from "./components/Image-slider";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App"></div>

       <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"20"} />
    </>
  )

}

export default App;