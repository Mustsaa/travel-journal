import React from "react"

export default function Main(props) {
    return (
        <div className="main-container">
            <img src={`./images/${props.img}`} alt={props.title} className="main-img" />
            <div className="main-content">
                <div className="main-location">
                    <img src="./images/map-icon.png" className="map-icon" alt="Map Icon" />
                    <p className="location-text">{props.location} <span className="view-map">View on Google Maps</span></p>
                </div>
                <h1>{props.title}</h1>
                <p>{props.date}</p>
                <p>{props.description}</p>
                <hr />
            </div>
        </div>
    )
}


