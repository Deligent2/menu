import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import IngredientList from "../Components/IngredientsList";

const MealPage = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const filterIngredients = (meal) => {
    for (const key in meal) {
      if (
        key.startsWith("strIngredient") &&
        meal[key] !== null &&
        meal[key] !== ""
      ) {
        setIngredients((prev) => [...prev, meal[key]]);
      }
    }
  };

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then(({ data }) => {
        filterIngredients(data.meals[0]);
        setMeal(data.meals[0]);
      });
  }, [idMeal]);

  return (
    <div>
      <div className={"container"}>
        <div className="row">
          <div className="col-5">
            <div className="box">
              <h2>{meal.strMeal}</h2>
              <img className={"page-img"} src={meal.strMealThumb} alt="" />
              <iframe
                src={`https://www.youtube.com/embed/${meal.strYouTube?.slice(
                  meal.strYouTube.indexOf("=") + 1
                )}`}
                frameborder="0"
              ></iframe>
            </div>
          </div>
          <div className="col-7">
            <div className="inner-box">
              <h2>Ингредиенты к блюду</h2>
              <IngredientList ingredients={ingredients} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPage;