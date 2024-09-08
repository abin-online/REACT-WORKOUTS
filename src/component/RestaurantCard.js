import { CDN_URL } from "../util/constant";

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, avgRating, sla } = props.data;

    return (
        <div className="m-4 p-4 w-[250px] h-[460px] rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ">
            <img 
                className="h-auto rounded-lg "
                src={CDN_URL + cloudinaryImageId}
                alt={name}
            />
            <h3>{name}</h3>
            <h4 className="cuisines">{cuisines.join(", ")}</h4>
            <h4>Rating: {avgRating}</h4>
            <h4>Delivery Time: {sla.deliveryTime} mins</h4> {/* Access deliveryTime inside sla */}
        </div>
    );
}

export default RestaurantCard


export const withPromotedLabel = (RestaurantCard)=> {
    return (props)=> {
        return(
            <div>
                <label className="absolute bg-black rounded-lg text-white " >Opened</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}