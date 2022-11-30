import { useEffect, useState } from "react"
import "./App.scss"
import SocialElement from "./SocialElement"

function App() {
    const [data, setData] = useState([
        {
            id: 1,
            target: 12000,
            span: "Twitter Followers",
        },
        {
            id: 2,
            target: 5000,
            span: "Youtube Subscribers",
        },
        {
            id: 3,
            target: 7500,
            span: "Facebook Fans",
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
