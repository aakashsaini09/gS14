'use client'
import BusinessList from "@/components/BusinessList";
import CategoryList from "@/components/CategoryList";
import Homepage from "@/components/Homepage";
import SearchIcon from "@/components/SearchIcon";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import GlobleApi from '../services/GlobleApi'
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("inside useEffect")
    getNearByPlace()
  }, [])
  
  const getNearByPlace = () => {
    console.log("inside getFunction")
    GlobleApi.getNearByPlaces('gas_station', '35.5827712', '-80.8484864')
    .then(resp =>{
      console.log("inside promise")
      console.log("response in page.tsx: ", resp)
    })
  }
  return (
    <div className="flex">
      <Sidebar/>
      <div className="text-black grid grid-cols-1 md:grid-cols-2 px-6 w-full mt-10">
         {/* Business List */}
         <div>
          <SearchIcon/>
          <CategoryList/>
          <BusinessList/>
         </div>
         {/* Gpogle Map */}
         <div> Gpogle Map</div>
      </div>
    </div>
  );
}
