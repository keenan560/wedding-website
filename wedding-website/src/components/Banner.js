import React from 'react'
import "./Banner.css"
import beach from "./beach.jpeg"

function Banner() {
    return (
        <div className="bannner__container">
            <img alt='banner' className='banner__image' src={beach}/>
        </div>
    )
}

export default Banner
