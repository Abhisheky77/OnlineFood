
import { useEffect, useState } from "react";
import { MENU_URL } from "./utils/Constants";

function useRestaurantMenu(){

    
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URL);
        const json = await data.json();
        console.log(json);
        
        setResInfo(json.recipes);
    };

    return resInfo;
}

export default useRestaurantMenu;
