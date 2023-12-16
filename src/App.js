import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePages from "./Pages/HomePage";
import SearchPages from "./Pages/SearchPage";
import MealPage from "./Pages/MealPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import IngredientsPage from "./Pages/IngredientsPage";



const App = () => {
    return (
    <>
        <Header/>
        <Routes>
            <Route path='/' element={<HomePages/>}/>
            <Route path='/search' element={<SearchPages/>}/>
            <Route path='/meal/:idMeal' element={<MealPage/>}/>
            <Route path='/ingredient/:name' element={<IngredientsPage/>}/>

        </Routes>
        <Footer/>
    </>
    )
}
export default App