

import { RecipeInterface } from "../interfaces/RecipeInterface"
import { useNavigate } from "react-router-dom"
import globalCartFunctions from "../state/Cart"
import '../styling/CartStyle.css'
import allRecipeState from "../state/Endpoints"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const CartComponent = () => {

  const { cart, displayCart, removeRecipeFromCart, toggleCart } = globalCartFunctions()
  const { setOneRecipe } = allRecipeState();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="centered-tags">
        <div className="info-tag">
          <h1>Varukorgen är tom!</h1>
        </div>
      </div>
    )
  }

  const handleNavigate = (recipe: RecipeInterface) => {
    toggleCart(displayCart)
    setOneRecipe(recipe)
    navigate(`/recipe/${recipe._id}`)
    window.scrollTo(0, 0);
  }

  const handleRemoveFromCart = (id: string | undefined) => {
    if (id) {
      removeRecipeFromCart(id)
    }
  }

  return (
    <div>
      {cart.map((cartItem, index) => {
        return(
          <div className="flex-box" key={index}>
            <div className="v-flex-box">
              {cartItem.recipeList.map((recipe) => {
                return(
                  <div className="recipe-box" onClick={() => handleNavigate(recipe)}>
                    <div className="cart-img">
                      <img src={recipe.imageUrl} alt={recipe.title} className="cart-img" />
                    </div>
                    <div className="recipe-info">
                      <b>{recipe.title}</b>
                      <p className="cart-description">{recipe.description}</p>
                    </div>
                      <p className="cart-rating">
                        <FontAwesomeIcon icon={faStar} className="star-icon" />
                        {" "}{recipe.avgRating === null ? <span>0</span> : <span>{recipe.avgRating?.toFixed(1)}</span>}/5
                      </p>
                    <button className="exit-button" onClick={() => handleRemoveFromCart(recipe._id)}>X</button>
                  </div>
                )
              })}
            </div>
            <div className="v-flex-box">
              test
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default CartComponent;