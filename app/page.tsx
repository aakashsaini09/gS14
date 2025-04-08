'use client'
import BusinessList from "@/components/BusinessList";
import CategoryList from "@/components/CategoryList"; 
import SearchIcon from "@/components/SearchIcon";
import Sidebar from "@/components/Sidebar";
import GlobleApi from '../services/GlobleApi'
import { useContext, useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import GoogleMap_ from "@/components/GoogleMap_";
export default function Home() {
  const [businessList, setBusinessList] = useState([])
  const { userLocation, setUserLocation} = useContext(UserLocationContext)
  useEffect(() => {
    getNearByPlace('restaurant')
    console.log("Userlocation using context", userLocation)
  }, [userLocation])
  
  const getNearByPlace = (category: any) => {

    GlobleApi.getNearByPlaces(category, '29.4107176', '77.0794705')
    .then(resp =>{
      setBusinessList(resp.data.results)

    })
  }
  return (
    <div className="flex">
      <Sidebar/>
      <div className="text-black grid grid-cols-1 md:grid-cols-2 px-6 w-full mt-10">
         {/* Business List */}
         <div>
          <SearchIcon/>
          <CategoryList setSelectedCategory={(category: any)=> getNearByPlace(category)}/>
          <BusinessList businessListData={businessList}/>
         </div>
         {/* Gpogle Map */}
         <div>
          <GoogleMap_/>
         </div>
      </div>
    </div>
  );
}
