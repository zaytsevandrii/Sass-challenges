import "./App.scss"
import { ImageContainer } from "./components/ImageContainer"
import {myImages} from './components/assets/constans.jsx'
import { useState } from "react"

function App() {
  const [checkid,setCheckid] = useState(null)
 
    return (
        <div className="container">
          {
            myImages.map(image=>(
              <ImageContainer key={image.id} image={image} checkActive={setCheckid} checkid={checkid}/>
            ))
          }
        </div>
    )
}

export default App
