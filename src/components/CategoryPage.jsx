import { useLocation } from "react-router-dom";

function CategoryPage() {
  const location = useLocation();
  const filterCard = location.state?.data || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Filtered Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filterCard.length === 0 ? (
          <h2>No items found!</h2>
        ) : (
          filterCard.map((item) => {
            const {
               name,
              image,
              rating,
              prepTimeMinutes,
              cuisine,
              tags,
              mealType
            } = item;

            return (
              <div
                key={item.id}
                className="border rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-200 bg-white"
              >
                {/* ⭐ Image */}
                <img
                  src={image}
                  alt={name}
                  className="w-full h-48 object-cover"
                />

                {/* ⭐ Text Details */}
                <div className="p-4">
                  <h3 className="font-bold text-xl">{name}</h3>

                  <p className="text-gray-700 mt-1">
                    ⭐ {rating} • {prepTimeMinutes} min
                  </p>

                  <p className="text-gray-700">Cuisine: {cuisine}</p>

                  <p className="text-gray-600 mt-1">
                    Tags: {tags?.join(", ")}
                  </p>

                  <p className="text-gray-600">
                    Meal Type: {mealType?.join(", ")}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
