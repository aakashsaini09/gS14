const { default: axios } = require("axios");

const getNearByPlaces = async (category, lat, lng) => axios.get('/api/nearByPlace?category='+category+'&lat='+lat+'&lng='+lng)


export default {
    getNearByPlaces
}