import { useState } from "react";
import { useNavigate } from "react-router-dom";   // ⭐ Add this
import useRestaurantMenu from "./MenuDataFetch";

const items = [
  { id: 1, name: "Pizza" },
  { id: 2, name: "Pasta" },
  { id: 3, name: "Chicken" },
  { id: 4, name: "Salad" },
  { id: 5, name: "Cookies" },
];

function ItemsHeader() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const resInfo = useRestaurantMenu();
  const navigate = useNavigate();  // ⭐ React Router hook

  if (!resInfo) return <h1>Loading...</h1>;

  // category click handler
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);

    // 1-second delay optional (UX good lagta hai)
    setTimeout(() => {
      navigate(`/category/${categoryName}`, {
        state: { 
          data: resInfo.filter((item) => item.tags.includes(categoryName)) 
        },
      });
    }, 200);
  };

  return (
    <div className=" w-full h-13 flex justify-around items-center list-none text-lg font-semibold cursor-pointer shadow-lg ">
      {items.map((item) => (
        <li
          key={item.id}
          className="hover:scale-110 hover:text-sky-400"
          onClick={() => handleCategoryClick(item.name)}
        >
          {item.name}
        </li>
      ))}
    </div>
  );
}

export default ItemsHeader;
