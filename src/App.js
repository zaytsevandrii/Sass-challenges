import { useEffect } from "react"
import { useState } from "react"
import "./App.scss"

function App() {
    const [speedEl, setSpeed] = useState(1)
    const [text, setText] = useState("We love Programming")
    const [idx,setIdx] = useState(1)

    let speed = 300 / speedEl

    function writeText() {
        
        setIdx(idx + 1)
        if(idx >text.length){
            setIdx(1)
        }
    }
    useEffect(() => {
        setTimeout(writeText,speed)
    },[idx])
    return (
        <div className="container">
            <div>
                <h1 id="text">{text.slice(0,idx)}</h1>
            </div>
            <div className="div">
                <label htmlFor="speed">Speed:</label>
                <input
                    type="number"
                    name="speed"
                    id="speed"
                    value={speedEl}
                    onChange={(e) => setSpeed(e.target.value)}
                    min="1"
                    max="10"
                    step="1"
                />
            </div>
        </div>
    )
}

export default App
