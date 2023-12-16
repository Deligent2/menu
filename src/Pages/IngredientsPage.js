import React, {useEffect, useState} from "react";
import axios from "axios";
import MealList from "../Components/MealList";
import {useParams} from "react-router-dom";

const IngredientsPage = ()=>{
    const {name}=useParams()
const [ingredient, SetIngredient] = useState([])

    useEffect(() => {
axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
    .then(({data})=>

    SetIngredient(data.meals)
    )
    }, []);


return(
    <div className={'container'}>
<MealList meals={ingredient}/>
    </div>
)
}
export default IngredientsPage;