import { useEffect, useState } from "react"
import "./App.scss"
import SocialElement from "./SocialElement"

function App() {
    const [data, setData] = useState([
        {
            id: 1,
            target: 12000,
            span: "Twitter Followers",
            classN:'fab fa-twitter fa-3x'
        },
        {
            id: 2,
            target: 5000,
            span: "Youtube Subscribers",
            classN:'fab fa-youtube fa-3x'
        },
        {
            id: 3,
            target: 7500,
            span: "Facebook Fans",
            classN:'fab fa-facebook fa-3x'
        },
    ])
    return (
        <div>
            <body>
                {data.map((element) => (
                    <SocialElement {...element} key={element.id} />
                ))}
            </body>
        </div>
    )
}

export default App