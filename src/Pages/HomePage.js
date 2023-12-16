import React, {useEffect, useState} from "react";
import Header0 from "../Components/Header";
import axios from "axios";
import MealList from "../Components/MealList";

const HomePages = ()=>{
const[meals,setMeals]=useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data})=>setMeals(data.meals))
    }, []);

    return(

        <div>
            <div className={'container'}>
                <h1>Главное меню</h1>
                <MealList meals={meals}/>
            </div>
        </div>
    )
}
export default HomePages