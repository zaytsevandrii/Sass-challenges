


import { useEffect, useState } from "react"
import "./App.scss"

function App() {
  const [time,setTime] = useState(0)
  function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
 useEffect(()=>{
const interval = setInterval(()=>{
  setTime(time=>time<100?time+1:100)
},30)
  return ()=>{
    clearInterval(interval)
  }
 },[])
  
    return (
      <>
        <section className="bg" style={{filter:`blur(${scale(time,0,100,30,0)}px)`}}> </section>
          <div className="loading-text" style={{opacity:scale(time,0,100,1,0)}}>{time}%</div>
          </>
    )
}

export default App
