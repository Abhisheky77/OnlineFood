import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import ItemsHeader from "./ItemsHeader";
import useOnlineStatus from "./utils/useOnlineStatus";

function Body() {
    // whenever sate variables update, react triggers a reconciliation cycle (re-renders the components)
    const [card, setCard] = useState([])

    const [searchText,SetSearchText] = useState("")

    const[filterCard,setFilterCard] = useState([])

 const onlineStatus = useOnlineStatus();

if (!onlineStatus) {
  return (
    <h1 style={{ color: "red", fontSize: "30px", marginTop: "50px" }}>
      Looks like you're offline!! Please check your internet connection.
    </h1>
  );
}


console.log("Online?", onlineStatus);
//  console.log(card);
 


    const dataFetch = async () => {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setCard(data.recipes);
        setFilterCard(data.recipes);
    }
    
  




 
    // if there is no dependency array in useEffect then useEffect will be called on every render.
    // if there is dependency array in useEffect then useEffect will be called on initial render(just once).
    // if dependency array is [searchText] =>then useEffect will be called everytime   searchText is changed.
    useEffect(() => {
        dataFetch()
    }, [])


    const topCards =() =>{
            const topCardData = card.filter((topFood)=> topFood.rating > 4.8);
            setFilterCard(topCardData);
    }

    const lowCards = ()=>{
        const lowCardData = card.filter((lowFood) => lowFood.rating < 4.5);
        setFilterCard(lowCardData)
    }




    if(card.length === 0){
        return <Shimmer/>
    }
    
    return (
        <>
            <div className=" hidden md:flex justify-around my-15 gap-6">

                <button className="w-56 h-10   rounded-lg bg-sky-500 hover:bg-sky-700 shadow-xl text-white font-semibold cursor-pointer" onClick={topCards}>Top Rated items</button>
                <div>
                <input className=" w-85 h-10 ring-1 rounded-lg pl-3  "  type="text" placeholder="Search for restaurants and food..."  value={searchText} onChange={(e)=>{
                    SetSearchText(e.target.value)
                }} />
                <button className=" w-35 h-10 ml-5 rounded-lg bg-sky-500 hover:bg-sky-700 shadow-xl text-white font-semibold cursor-pointer " type="submit"  onClick={()=>{
                    /* == ka problem ha ki --> jo food card me naam ha yo same name aur pura naam mar na per search hi resulte deta ha
                    const filterData=card.filter((res)=>res.name == searchText); */

                    const filterData = card.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase())) ;
                    // setCard(filterData);
                    setFilterCard(filterData);

                    
                }}>Search</button>
                </div>

                <button className="w-56 h-10   rounded-lg bg-sky-500 hover:bg-sky-700 shadow-xl text-white font-semibold cursor-pointer" onClick={lowCards}>Low Rated items</button>

            </div>

            <div  className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
                {

                    // card.length >  0 && 

                    // card.map((foodList) => (
                    //     <RestaurantCard key={foodList.id} resData={foodList} />
                    // ))

                    filterCard.map((foodList) => (
                       <Link  key={foodList.id} to={"/restaurant/"+foodList.id}> <RestaurantCard resData={foodList} /></Link>
                    ))

                }

            </div>
        </>

    )

}
export default Body