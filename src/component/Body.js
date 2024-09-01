import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faAngleDown } from '@fortawesome/free-solid-svg-icons';

import RestaurantCard from "./RestaurantCard";
import resList from "../util/mockData";

const Body = () => {
  
    const [restaurantList , setrestaurantList] = useState(resList)

    return (
        <div className="body">
            <span className="search-filter">
            <div className="search"><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</div>
            <button className="filter-btn" 
                    onClick={()=> {
                        const filteredList = restaurantList.filter(res=> res.avgRating > 4.5); 
                        setrestaurantList(filteredList)
                        }}
                    >
                        Top Rated Restaurant
            </button>
            </span>
            <div className="res-container">
                {
                    restaurantList.map((restaurant) => 
                    <RestaurantCard key ={restaurant.id} data={restaurant}/>)
                }
            </div>
        </div>
    );
};

export default Body