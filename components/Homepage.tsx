import React, { useEffect } from 'react';

const Homepage = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && 'geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Location: ", position.coords);
                },
                (error) => {
                    console.error("Error getting location: ", error.message);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser or running on the server.");
        }
    }, []); // Runs only once after the component mounts

    return (
        <>
            <div id='demo'>
                Home page
            </div>
        </>
    );
};

export default Homepage;