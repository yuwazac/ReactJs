import { createBrowserRouter } from "react-router-dom";
import App from "../ExerciseNavigate/App.jsx";
import NotFound from "./Components/NotFound.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import RecipeList from "./pages/RecipeList.jsx";
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import CategoryRecipes from "./pages/CategoryRecipes.jsx";


const RouteCenter = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement: <NotFound/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"recipes",
                element:<RecipeList/>,
            },
            {
                path:"recipes/:id",
                element:<RecipeDetails/>,
            },
            {
                path: 'categories',
                element:<Categories/>,
                children:[
                    {
                        path:'categoryId',
                        element:<CategoryRecipes/>,
                    },
                ],
            },
        ],
    },
]);

export default RouteCenter;