import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Header from './My components/Header'
import Search from './My components/Search.jsx';
import RecipeCard from './My components/RecipeCard';
import RecipeList from './My components/ReciprList';
import Contact from './My components/Contact';
import About from './My components/About';
import './index.css';

const App = () => {
  //  state
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // api fecth
  const getRecipes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      setRecipes(response.data.recipes);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false);
    }
  };

  // page raod par ap call
  useEffect(() => {
    getRecipes();
  }, [])
  // filtering recipes based on search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );
  // loding screen
  if (loading) {
    return <h1 className='text-center text-2xl font-bold mt-10'>Loading...</h1>
  }
  // ui
  return (
    <div className='bg-orange-100 min-h-screen'>
      <Header />
      <Search search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<RecipeList recipes={filteredRecipes} />} />
      </Routes>
    </div>
  )
}

export default App
