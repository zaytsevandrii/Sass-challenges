import { useState } from "react"
import "./App.scss"
import Slide from "./Slide"

function App() {
    const [active,setActive] = useState(1)
    const [slides,setSlides] = useState([
        {id:1,url:'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'},
        {id:2,url:'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80'},
        {id:3,url:'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'},
        {id:4,url:'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'},
        {id:5,url:'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'},
    ])

    return (
        <div className="main" style={{backgroundImage:`url(${slides[active-1].url})`}}>
            <div className="slider-container">
                {
                    slides.map(slide =>(
                        <Slide url={slide.url} id={slide.id} active={active}/>
                    ))
                }
            
                <button className="arrow left-arrow" id="left" onClick={()=>setActive(active=>active>1?active-1:active=5)}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <button className="arrow right-arrow" id="right" onClick={()=>setActive(active=>active<5?active+1:active=1)}>
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}

export default App


 {/* <div
                    className="slide active"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)`,
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80)`,
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)`,
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80)`,
                    }}
                ></div>
                <div
                    className="slide"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)`,
                    }}
                ></div> */}