import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./MenuDataFetch";

function RestaurantMenu() {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) return <Shimmer />

    const singleCard = resInfo.find(item => item.id === Number(resId));

    if (!singleCard) return <h1>Restaurant Not Found</h1>

    const { name, image, rating, cuisine, tags, mealType, prepTimeMinutes, reviewCount, ingredients, instructions } = singleCard;

    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-20 mt-18">

            {/* IMAGE BOX */}
            <div className="w-120 h-125  rounded-2xl shadow-2xl flex justify-center items-center ">
                <img
                    className="w-110 h-110 rounded-2xl  "
                    src={image}
                    alt="meal"
                />
            </div>

            {/* INFO BOX */}
            <div className="w-180 h-125 rounded-2xl shadow-2xl cursor-pointer p-8 font-serif text-lg font-medium pt-6 text-black overflow-auto md:w-1/2 w-full">

                <p className="text-4xl text-red-600">{name}</p>

                <p className="text-2xl my-3">{rating} ⭐ {prepTimeMinutes}.min</p>

                <ul className="list-disc ml-5 marker:text-red-500">
                    <li><span className="text-[22px]">ReviewCount : </span>{reviewCount}</li>
                    <li><span className="text-[22px]">Cuisine : </span>{cuisine}</li>
                    <li><span className="text-[22px]">Tags : </span>{tags.join(", ")}</li>
                    <li><span className="text-[22px]">MealType : </span>{mealType.join(", ")}</li>
                    <li><span className="text-[22px]">ReviewCount : </span>{ingredients.join(", ")}</li>
                    {/* <li><span className="text-[22px]">ReviewCount :</span>{reviewCount}</li> */}
                </ul>
               
                {/* <p className="my-3">
                    <span className="text-[22px]">ReviewCount : </span>{reviewCount}
                </p>

                <p className="my-3">
                    <span className="text-[22px]">Cuisine : </span>{cuisine}
                </p>

                <p className="my-3">
                    <span className="text-[22px]">Tags : </span>{tags.join(", ")}
                </p>

                <p className="my-3">
                    <span className="text-[22px]">MealType : </span>{mealType.join(", ")}
                </p>

                <span className="text-[22px]">Ingredients : </span>
                <p>{ingredients.join(", ")}</p> */}

                <ul >
                    <li className=" list-disc text-[22px] mt-3 marker:text-red-500">Instructions :-</li>

                    {singleCard.instructions.map((ing, index) => (
                        <li key={index}>{ing}</li>
                    ))}
                </ul>
            </div>

        </div>
    );


}

export default RestaurantMenu;
