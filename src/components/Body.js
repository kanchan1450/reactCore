import RestoCard from "./RestoCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {

    const [listOfRestaurant, setistOfRestaurant] = useState([]);

    useEffect(() => {fetchData() ;}, []);

    const fetchData = async() => {
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json);
    setistOfRestaurant(json?.data?.cards[2]?.card?.card?. gridElements?.infoWithStyle?.restaurants);
    };

    if(listOfRestaurant.length === 0)
    {
        return <Shimmer/>
    }


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    const filterdlist = listOfRestaurant.filter (
                        (res) => res.info.avgRating>4.2
                    );
                    setistOfRestaurant(filterdlist);
                }}> Top Rated Restaurant</button>
                </div>
            <div className="resto-container">
                {listOfRestaurant.map((restaurant) => (
                <RestoCard key = {restaurant.info.id} resData = {restaurant}/>))}
            
                
            </div>
        </div>
    )
}

export default Body;