import { useEffect, useState } from "react";
import { MENU_API } from "./constant";


const useRestaurnatMenu = (resId)=> {
    
    const [resInfo , setResInfo] = useState(null)

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(`${MENU_API}${resId}`);
        const dataLoaded = await data.json();
        setResInfo(dataLoaded)
    }

    return resInfo;
}

export default useRestaurnatMenu;