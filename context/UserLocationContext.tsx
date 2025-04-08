// context/UserLocationContext.tsx
'use client'
import { createContext, useEffect, useState } from 'react'

export const UserLocationContext = createContext({
  userLocation: null,
  setUserLocation: (loc: any) => {}
})

export const UserLocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [userLocation, setUserLocation] = useState<any>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
        console.log("context running...")
        console.log(pos)
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
    })
  }, [])

  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      {children}
    </UserLocationContext.Provider>
  )
}
