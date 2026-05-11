import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({recipe}) => {
 
    return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <img
      src={recipe.image}
      alt={recipe.name}
      className="w-full h-48 object-cover rounded-t-md"  
        />    
<div className="p-4">
    <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
    <p className="text-gray-600 mb-4">⏱️{recipe.prepTimeMinutes} minutes</p>
    <p className="text-yellow-500 mb-4">⭐{recipe.rating}</p>

          <Link
  to={`/recipe/${recipe.id}`}
  className="bg-yellow-500 text-gray-800 px-4 py-2 rounded mt-4 inline-block no-underline"
>
  View Recipe
</Link>

    </div>
  </div>
  )
}

export default RecipeCard
