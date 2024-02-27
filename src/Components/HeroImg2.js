import React from 'react'
const HeroImg2 = (props) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${props.bgImage})`
    };
    return (
        <div className="main">
            <div className="header">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className="bg-img" style={backgroundImageStyle}>
            </div>
        </div>

    )
}

export default HeroImg2
