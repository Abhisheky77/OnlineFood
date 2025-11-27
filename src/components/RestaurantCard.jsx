
function RestaurantCard({ resData }) {
  if (!resData) return null; // agar undefined hai, kuch render mat karo

  const { image, name, rating, prepTimeMinutes, cuisine, tags, mealType } = resData;

  return (
    <div>
      <div className=' border-1 w-75 h-105 mx-9  rounded-2xl shadow-md 
                transition-transform duration-200 
                hover:scale-105 cursor-pointer overflow-hidden'>
        <img className="w-full h-60  mb-3 object-cover" src={image} alt="" />
        <div className=" ">
          <p className=" font-bold text-xl ml-3">{name}</p>
          <p className="text-gray-600 mt ml-3">{rating}⭐  {prepTimeMinutes}.min</p>
          <p className="text-gray-600 mt ml-3">{cuisine}</p>
          <p className="text-gray-600 mt ml-3">{tags.join(", ")}</p>
          <p className="text-gray-600 mt ml-3">{mealType.join(", ")}</p>
        </div>

      </div>
    </div>
  )
}
export default RestaurantCard