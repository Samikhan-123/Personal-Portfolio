import React from 'react'
import { Link } from 'react-router-dom'
const PortCards = (props) => {
    return (

        <div className="card-container">
            <img className='img-tag' src={props.imgSrc} alt="img" />
            <h2 className="card-heading">{props.title}</h2>
            <p>{props.text}</p>
            <div className="card-links">
                <Link className="btn-dark" to={props.view}>View</Link>
                <Link className="btn-dark disabled-link" to="#" disabled >Source</Link>
            </div>
        </div>

    )
}

export default PortCards
