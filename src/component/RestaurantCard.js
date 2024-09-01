import { CDN_URL } from "../util/constant";

const RestaurantCard = (props) => {
    const { name, cloudinaryImageId, cuisines, avgRating, sla } = props.data;

    return (
        <div className="res-card">
            <img
                className="res-logo"
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