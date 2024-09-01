import RestaurantCard from "./RestaurantCard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faAngleDown } from '@fortawesome/free-solid-svg-icons';

import resList from "../util/mockData";

const Body = () => {
    return (
        <div className="body">
            <span className="search-filter">
            <div className="search"><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</div>
            <button className="filter"> <FontAwesomeIcon icon={faAngleDown} />Filter</button>
            </span>
            <div className="res-container">
                {
                    resList.map((restaurant) => 
                    <RestaurantCard key ={restaurant.id} data={restaurant}/>)
                }
            </div>
        </div>
    );
};

export default Body