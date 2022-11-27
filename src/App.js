import { useState } from "react"
import "./App.scss"

function App() {
  const [step,setStep] = useState(1)
  const nextStep=()=>{
    setStep(prev=>prev===4?prev=4:prev+1)
  }
  const prevStep=()=>{
    setStep(prev=>prev===1?prev=1:prev-1)
  }
    return (
        <div className="container">
            <div className="progress-container">
                <div className="progress" style={{width:`${((step-1)*33)}%`}}></div>
                <div className="circle active">1</div>
                <div className={`circle ${step>1&&'active'}`}>2</div>
                <div className={`circle ${step>2&&'active'}`}>3</div>
                <div className={`circle ${step>3&&'active'}`}>4</div>
            </div>
            <button  className="btn" disabled={step===1?true:false} onClick={prevStep}>
                Prev
            </button>
            <button className="btn" disabled={step===4?true:false} onClick={nextStep}>Next</button>
        </div>
    )
}

export default App
