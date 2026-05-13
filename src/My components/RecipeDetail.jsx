import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => setRecipe(res.data));
  }, [id]);

  if (!recipe) return <h1>Loading...</h1>;

  return (


    <card className="w-xs text-center">
      {/* <img src={recipe.image} className="h-80  rounded-md mr-4 " /> */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
  
  {/* Image */}
  <img
    src={recipe.image}
    alt={recipe.name}
    className="w-full h-96 object-cover"
  />

  {/* Content */}
  <div className="p-8">
    
    {/* Title */}
    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
      {recipe.name}
    </h1>

    {/* Basic Info */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
      <div className="bg-yellow-100 p-4 rounded-xl">
        <p className="text-lg font-semibold">🍴 Cuisine</p>
        <p className="text-gray-700">{recipe.cuisine}</p>
      </div>

      <div className="bg-green-100 p-4 rounded-xl">
        <p className="text-lg font-semibold">⭐ Rating</p>
        <p className="text-gray-700">{recipe.rating}</p>
      </div>

      <div className="bg-blue-100 p-4 rounded-xl">
        <p className="text-lg font-semibold">⏱️ Prep Time</p>
        <p className="text-gray-700">{recipe.prepTimeMinutes} min</p>
      </div>
    </div>

    {/* Ingredients */}
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-yellow-400 pb-2">
        🥗 Ingredients
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {recipe.ingredients?.map((i, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
          >
            • {i}
          </div>
        ))}
      </div>
    </div>

    {/* Instructions */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-yellow-400 pb-2">
        👨‍🍳 Instructions
      </h2>

      <div className="space-y-4">
        {recipe.instructions?.map((step, index) => (
          <div
            key={index}
            className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg"
          >
            <span className="font-bold text-gray-800">
              Step {index + 1}:
            </span>{" "}
            <span className="text-gray-700">{step}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
    </card>

  );
};

export default RecipeDetail;