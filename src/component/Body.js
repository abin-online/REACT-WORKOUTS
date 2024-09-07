import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import RestaurantCard from "./RestaurantCard";
import resList from "../util/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useOnlineStatus from "../util/useOnlineStatus";

const Body = () => {

    const [restaurantList, setrestaurantList] = useState([])
    const [filteredRestaurant , setFilteredRestaurant] = useState([]) //filtering out the item
    const [searchItem, setSearchItem] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        let fetchedArray = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        let dataArray = []
        for (let i = 0; i < fetchedArray.length; i++) {
            dataArray.push(fetchedArray[i].info)
        }

        console.log(dataArray)

        setrestaurantList(dataArray)
        setFilteredRestaurant(dataArray)

    };

    console.log(restaurantList)

    const onlineStatus = useOnlineStatus()
    if(!onlineStatus) return (
        <h1>Your Offline, Please Check Your Internet Connection</h1>
    )

    return restaurantList.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <span className="search-filter">
                <faMagnifyingGlass/><input placeholder="Search items..." value={searchItem}
                onChange={(e)=>setSearchItem(e.target.value)}
                onKeyDown={()=>{
                    const filteredArray = restaurantList.filter((res)=> res.name.toLowerCase().includes(searchItem.toLowerCase()))
                    setFilteredRestaurant(filteredArray)
                }}
                />

                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = restaurantList.filter(res => res.avgRating > 4.5);
                        setrestaurantList(filteredList)
                    }}
                >
                    Top Rated Restaurant
                </button>
            </span>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) =>
                        <Link className="res-card-link" to={"/restaurants/"+ restaurant.id}><RestaurantCard key={restaurant.id} data={restaurant} /> </Link>)
                }
            </div>
        </div>
    );
};

export default Body