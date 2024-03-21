//Hampus

import { useEffect } from 'react';
import allRecipeState from '../state/Endpoints';
import { useNavigate } from 'react-router-dom';

import "../styling/AllRecipeStyle.css"

const DisplayAllRecipe = () => {

  const { recipeList, fetchAllRecipes } = allRecipeState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllRecipes();
  }, [recipeList])

  return (
    <>
      <div className='all-recipe'>
        {recipeList.map((recipe) => {
          return (
            <div className='recipe-card' key={recipe._id} onClick={() => navigate(`/recipe/${recipe._id}`)}>
              <div className='first-card-div'>
                <img className='display-recipe-img' src={recipe.imageUrl} alt={recipe.title} />
                <b className='card-category'>{recipe.categories[0]}</b>
              </div>
              <div className='second-card-div'>
                <h2>{recipe.title}</h2>
                <span>Betyg</span>
                {recipe.avgRating === null ? <p>inga betyg</p> : <p>{recipe.avgRating.toFixed(1)}/5</p>}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DisplayAllRecipe