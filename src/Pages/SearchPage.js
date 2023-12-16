import React, {useEffect, useState} from "react";
    import axios from "axios";
    import MealList from "../Components/MealList";
    import Header from "../Components/Header";
    import Footer from "../Components/Footer";

    const SearchPages=()=>{
        const [inputMeal, setInputMeal]=useState('')
        const [search, setSearch]=useState([])
     const handleClick=()=>{
             axios(`https://www.themealdb.com/api/json/v2/1/search.php?s=${inputMeal}`)
                 .then(({data})=>{
                     console.log(data.meals)
                     setSearch(data.meals)
                 })
     }

     return(
         <div>
             <div className={'container'}>
                 <input type="text" placeholder={"Найти блюдо"} onChange={(e)=>setInputMeal(e.target.value)}/>
                 <button onClick={handleClick}>Поиск</button>
                 <MealList meals={search}/>
             </div>
         </div>
     )


    }
    export default SearchPages