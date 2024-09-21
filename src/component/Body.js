import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import resList from "../util/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useOnlineStatus from "../util/useOnlineStatus";

const Body = () => {

    const [restaurantList, setrestaurantList] = useState([])
    const [filteredRestaurant , setFilteredRestaurant] = useState([]) //filtering out the item
    const [searchItem, setSearchItem] = useState("")
    const IsPromoted = withPromotedLabel(RestaurantCard)

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

    const sortByTime = ()=>{

        const sortedFilteredList = restaurantList.sort((a,b)=> new Date(a.availability.nextCloseTime) - new Date(b.vailability.nextCloseTime) )
        setrestaurantList(sortedFilteredList)

    }

    return restaurantList.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <span className="justify-between ">
                <faMagnifyingGlass/>
                <input placeholder="Search items..."
                className="w-96 h-10 border-2 rounded-md m-10 "
                value={searchItem}
                onChange={(e)=>setSearchItem(e.target.value)}
                onKeyDown={()=>{
                    const filteredArray = restaurantList.filter((res)=> res.name.toLowerCase().includes(searchItem.toLowerCase()))
                    setFilteredRestaurant(filteredArray)
                }}
                />

                <button className="float-right m-10 border-2 rounded-xl w-[200px] h-10 shadow-xl text-white bg-indigo-700 hover:bg-blue-800 hover:shadow-2xl transfrom hover:scale-105 transition duration-300"
                    onClick={() => {
                        const filteredList = restaurantList.filter(res => res.avgRating > 4.5);
                        setrestaurantList(filteredList)
                    }}
                >
                    Top Rated Restaurant
                </button>
                <button onClick={sortByTime}>Sort By Closing Time</button>
            </span>
            <div className=" flex flex-wrap ">
                {   
                    filteredRestaurant.map((restaurant) => 
                    <Link key={restaurant.id} className="res-card-link" to={"/restaurants/"+ restaurant.id}>
                        {!restaurant.isOpen ? 
                        (<RestaurantCard  data={restaurant} /> ):
                        (<IsPromoted  data={restaurant} />)
                        }
                    </Link>
                )
                }
            </div>
        </div>
    );
};

export default Body