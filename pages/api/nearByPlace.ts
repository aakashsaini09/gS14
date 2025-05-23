// import axios from "axios";

// const BASE_URL= "https://maps.googleapis.com/maps/api/place";
// const API_KEY= process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
// export default async function handler(req: any, res: any){
//     try {
//         const response = await axios(BASE_URL+'/nearbysearch/json?fields=formatted_address,name,rating,opening_hours,geometry,photos&type='+
// req.query.category+'&location='+req.query.lat+','+req.query.lng+'&radius=5000&key='+API_KEY)
//          const data=response.data;
//         res.status(200).json(data);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error: "Internal Server Error"});
        
//     }
// }
// pages/api/nearByPlace.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { category, lat, lng } = req.query;

    const response = await axios.get(
      `${BASE_URL}/nearbysearch/json?fields=formatted_address,name,rating,opening_hours,geometry,photos&type=${category}&location=${lat},${lng}&radius=5000&key=${API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
