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
                <div className="listing-container">
                    {listings.map((element) => (
                        <div key={element.listingId}>
                            <h3>
                                {element.heading}
                            </h3>
                            <div className="listing-card">
                                <div className="listing-img-container">
                                    <img className="listing-img" alt="listing"></img>
                                </div>
                                <div className="listing-description-container">
                                    <p>
                                        {element.description}
                                    </p>

                                    <p>Location: {element.location[0].toUpperCase() + element.location.substring(1).toLowerCase()}</p>

                                    <p>Price: ${Number((element.price)).toLocaleString()}</p>
                                </div>

                            </div>

                            {console.log("rendered")}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}