import React, { useEffect, useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import Contact from './Contact';

const Home = () => {
    const[ recipes, setReacipes] = useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/recipes")
        .then((res)=>setReacipes(res.data.recipes));
    }, []);
  return (
      <div className="grid grid-cols-3 gap-4 p-5">
      {recipes.map((item) => (
        <Link key={item.id} to={`/recipe/${item.id}`}>
          <div className="bg-white p-4 shadow rounded">
            <img src={item.image} className="h-40 w-full object-cover" />
            <h2 className="font-bold">{item.name}</h2>
          </div>
        </Link>
        ))}
    </div>

  );
};

export default Home;
