import React from "react"

function Slide({url,active,id}) {
    return (
        <div
            className={`slide ${active===id&&'active'}`}
            style={{
                backgroundImage: `url(${url})`,
            }}
        ></div>
    )
}

export default Slide
