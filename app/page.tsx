'use client'
import BusinessList from "@/components/BusinessList";
import CategoryList from "@/components/CategoryList"; 
import SearchIcon from "@/components/SearchIcon";
import Sidebar from "@/components/Sidebar";
import GlobleApi from '../services/GlobleApi'
import { useEffect, useState } from "react";
import { UserLocationProvider } from "@/context/UserLocationContext";
export default function Home() {
  const [businessList, setBusinessList] = useState([])
  useEffect(() => {
    getNearByPlace('restaurant')
    console.log("UserLocationProvider: ", UserLocationProvider)
  }, [])
  
  const getNearByPlace = (category: any) => {

    GlobleApi.getNearByPlaces(category, '29.4107176', '77.0794705')
    .then(resp =>{
      // console.log("response in page.tsx: ", resp)
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
         <div> Gpogle Map</div>
      </div>
    </div>
  );
}
