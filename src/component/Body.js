import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faAngleDown } from '@fortawesome/free-solid-svg-icons';

import RestaurantCard from "./RestaurantCard";
import resList from "../util/mockData";

const Body = () => {
  
    const [restaurantList , setrestaurantList] = useState(resList)
    
    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=9.91850&lng=76.25580");
        const json = await data.json();
    
        //console.log("hii",json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
        setrestaurantList(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants)
    };
    
    if(restaurantList.length === 0) {
            return(<h1>LOADING</h1>)
    }
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