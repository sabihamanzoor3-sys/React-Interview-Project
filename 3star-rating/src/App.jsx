import { useState } from "react";
import './App.css'
import StarRating from "./components/Star-rating"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App"></div>

      <StarRating noOfStars={10}/>
    </>
  )

}

export default App;