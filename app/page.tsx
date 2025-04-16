'use client'
import BusinessList from "@/components/BusinessList";
import CategoryList from "@/components/CategoryList"; 
import SearchIcon from "@/components/SearchIcon";
import Sidebar from "@/components/Sidebar";
import GlobleApi from '../services/GlobleApi'
import { useContext, useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import GoogleMap_ from "@/components/GoogleMap_";
import { BusinessListContext } from "@/context/BusinessListContext";
import { BusinessType, SelectedBusinessContext } from "@/context/SelectedBusinessContext";
import BusinessToast from "@/components/BusinessToast";
export default function Home() {
  const [businessList, setBusinessList] = useState<any[]>([])
  const { userLocation, setUserLocation } = useContext(UserLocationContext) as { userLocation: { lat: number; lng: number } | null, setUserLocation: (location: { lat: number; lng: number }) => void };
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessType | null>(null)
  useEffect(() => {
    if(userLocation)
      getNearByPlace('restaurant') 
  }, [userLocation])
  
  const getNearByPlace = (category: string) => {
    // console.log("Category inside getNearBy Function: ", category)
    GlobleApi.getNearByPlaces(category, userLocation?.lat, userLocation?.lng)
    .then(resp =>{
      setBusinessList(resp.data.results)

    })
  }
  return (
    <div className="flex">
      <SelectedBusinessContext.Provider value={{selectedBusiness, setSelectedBusiness}} >
      <BusinessListContext.Provider value={{ businessList, setBusinessList}}>
      <Sidebar/>
      <div className="text-black grid grid-cols-1 md:grid-cols-2 px-6 w-full mt-10">
         {/* Business List */}
         <div>
          <SearchIcon/>
          <CategoryList setSelectedCategory={(category: any)=> getNearByPlace(category)}/>
          <BusinessList businessListData={businessList}/>
         </div>
         {/* Gpogle Map */}
         <div className="order-first md:order-last">
          <GoogleMap_/>
          <BusinessToast userLocation={userLocation}/>
         </div>
      </div>
      </BusinessListContext.Provider>
      </SelectedBusinessContext.Provider>
    </div>
  );
}
