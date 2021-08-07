import React, { useState, useEffect } from 'react'
import './Listings.css'

export default function Listings() {
    const [listings, setlistings] = useState(null);

    useEffect(() => {

        fetch("http://localhost:8080/listing")
            .then(response => response.json())
            .then(json => setlistings(json))

        return () => {
            // cleanup 
        }
    }, [])

    if (listings === null) {
        return (
            <p>Loading</p>
        )
    } else {
        return (
            <div>
                <div>
                    <h2>Listings:</h2>
                </div>

                <div>
                    {listings.map((element) => (

                        <div className="listing-container" key={element.listingId}>
                            <div>
                                <h3 className="listing-heading">
                                    {element.heading}
                                </h3>
                            </div>

                            <div className="listing-card">

                                <div className="listing-img-container">
                                    <img className="listing-img" src={`http://127.0.0.1:8080/downloadFile/${element.imageURL}`} alt="listing"></img>
                                </div>

                                <div className="listing-description-container">
                                    <p>
                                        {element.description}
                                    </p>

                                    <p>Location: {element.location[0].toUpperCase() + element.location.substring(1).toLowerCase()}</p>

                                    <p>Price: ${Number((element.price)).toLocaleString()}</p>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        )
    }
}