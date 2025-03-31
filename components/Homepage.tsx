"use client";
import React, { useEffect,useState } from 'react';
import axios from 'axios'

const Homepage = () => {
    const [address, setaddress] = useState<{
        latitude: number;
        longitude: number;
    }>({
        latitude: 0,
        longitude: 0
    });
    useEffect(() => {
        if (typeof window !== 'undefined' && 'geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Location: ", position.coords);
                    setaddress({latitude :position.coords.latitude,
                        longitude: position.coords.longitude
                    })
                },
                (error) => {
                    console.error("Error getting location: ", error.message);
                }
            );
            getCity()
        } else {
            console.log("Geolocation is not supported by this browser or running on the server.");
        }
    }, []); 
    async function getCity(){
        const req = `https://geocode.maps.co/reverse?lat=${address.latitude}&lon=${address.longitude}&api_key=67ea4fd38a532026211811shbc6165a`
        const request= await axios.post(req)
        console.log(request)
    }
    return (
        <>
            <div id='demo'>
                Home page
            </div>
        </>
    );
};

export default Homepage;