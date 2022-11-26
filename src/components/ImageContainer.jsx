import React from "react"

export const ImageContainer = ({image,checkActive, checkid,myClass}) => {
    return (
        <div className={`${checkid===image.id?'panel active':'panel'}`} onClick={()=>checkActive(image.id)}
            style={{
                backgroundImage:image.to
                    
            }}
        >
            <h3>{image.title}</h3>
        </div>
    )
}


ImageContainer.defaultProps = {
    myClass: "panel",
    
  }