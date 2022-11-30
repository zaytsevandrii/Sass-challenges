import React, { useEffect, useState } from "react"

export default function SocialElement({target,span,classN}) {
    const [sum,setSum] = useState(0)
    /* const updateCounter=()=>{
        const inrement = target/200
        if(sum<target){
            setSum(Math.ceil(sum+inrement))
        }
    }
    setTimeout(updateCounter,100) */

  useEffect(()=>{
    const inrement = target/200
    const interval = setInterval(()=>{
        setSum(sum=>sum<target?Math.ceil(sum+inrement):target)
      },10)
  },[])
    return (
        <div className="counter-container">
            <i className={classN}></i>
            <div className="counter" data-target="12000">
                {sum}
            </div>
            <span>{span}</span>
        </div>
    )
}
