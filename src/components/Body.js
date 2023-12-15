import RestoCard from "./RestoCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {

    const [listOfRestaurant, setistOfRestaurant] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const[searchText, setSearchText] =useState("");

    console.log("Body rendered");

    useEffect(() => {fetchData() ;}, []);

    const fetchData = async() => {
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json);
    setistOfRestaurant(json?.data?.cards[2]?.card?.card?. gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?. gridElements?.infoWithStyle?.restaurants);
    };

    if(listOfRestaurant.length === 0)
    {
        return <Shimmer/>
    }


    return (
        <div className="body">
            <div className="filter">
                <div className="search-field">
                    <input type="text" 
                    className="search-text" 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);

                    }}
                    ></input>
                    <button className="serach" onClick = {() => {
                        console.log(searchText);
                        // const filteredRestaurants = listOfRestaurant.filter((res) => {
                        //     const restaurantName = res.name.toLowerCase();
                        //     const cuisines = res.info.cuisines.map(cuisine => cuisine.toLowerCase());
                            
                        //     return restaurantName.includes(searchText.toLowerCase()) || cuisines.some(cuisine => cuisine.includes(searchText.toLowerCase()));
                        //   }); 

                        const filteredRestaurant = listOfRestaurant.filter((res) => {
                            // const restaurantName = res.name ? res.name.toLowerCase() : "";
                            const cuisines = res.info && res.info.cuisines ? res.info.cuisines.map(cuisine => cuisine.toLowerCase()) : [];
                          
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase()) || cuisines.some(cuisine => cuisine.includes(searchText.toLowerCase()));
                          });
                        
                       
                                
                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                        Search

                    </button>
                    
            </div>
                <button className="filter-btn"
                onClick={() => {
                    const filterdlist = filteredRestaurant.filter (
                        (res) => res.info.avgRating>4.1
                    );
                    setFilteredRestaurant(filterdlist);
                }}> Top Rated Restaurant</button>
                </div>
            <div className="resto-container">
                {filteredRestaurant.map((restaurant) => (
                <RestoCard key = {restaurant.info.id} resData = {restaurant}/>))}
            
                
            </div>
        </div>
    )
}

export default Body;