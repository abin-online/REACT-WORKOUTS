import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { DYNAMIC_IMG_URL } from "../util/constant";

import { MENU_API } from "../util/constant";
import useRestaurnatMenu from "../util/useRestaurant";

function RestaurantMenu() {

    const {resId} = useParams()
    console.log(resId)

    const resInfo = useRestaurnatMenu(resId)

  if(resInfo === null) return <Shimmer/>

    console.log(resInfo?.data)
     const {name , cuisines , city , cloudinaryImageId , slugs} = resInfo?.data?.cards?.[2]?.card?.card?.info
     return (
        <div className="menu">
            <img src = {DYNAMIC_IMG_URL + cloudinaryImageId}/>
            <h1>{name}</h1>
            <h3>{city}</h3>
            <h3>{slugs.restaurant}</h3>
            <h2>Menu</h2>
            
            <ul>
                {cuisines.map((item, i)=>{
                    return <li key={i}>{item}</li>
                })}
            </ul>
            
        </div>
    )
}

export default RestaurantMenu

