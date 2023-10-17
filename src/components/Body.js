import RestoCard from "./RestoCard";
import resList from "../utils/mockData";
import {useState} from "react";
const Body = () => {

    const [listOfRestaurant, setistOfRestaurant] = useState(resList);
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