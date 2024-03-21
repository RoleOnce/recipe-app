//Bilge

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import { PiArrowSquareLeftFill, PiArrowSquareRightFill } from "react-icons/pi";
import "../styling/SliderStyle.css" 
import { Link } from 'react-router-dom';
import { RecipeInterface } from '../interfaces/RecipeInterface';

const RecipeSlider: React.FC = () => {
  const [randomRecipes, setRandomRecipes] = useState<RecipeInterface[]>([]);

  useEffect(() => {
    // Fetch random recipes when component mounts
    getRandomRecipes();
  }, []);

  
  const getRandomRecipes = async () => {
    try {
      // Fetch recipes from the API
      const result = await axios.get<RecipeInterface[]>('https://sti-java-grupp4-s4yjx9.reky.se/recipes');
      // Shuffle the fetched recipes
      const shuffledRecipes = result.data.sort(() => Math.random() - 0.5);
      // Select a subset of recipes for the slider
      const selectedRandomRecipes = shuffledRecipes.slice(0, 15); 
      // Set state with selected random recipes
      setRandomRecipes(selectedRandomRecipes);
    } catch (error) {
      // Handle errors if fetching fails
      console.error('Error fetching random recipes', error);
    }
  };


  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      // Custom previous arrow component
      <div className="custom-prev-arrow" onClick={onClick}>
        <PiArrowSquareLeftFill size={50}/> 
      </div>
    );
  };
  
  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      // Custom next arrow component
      <div className="custom-next-arrow" onClick={onClick}>
        <PiArrowSquareRightFill size={50}/> 
      </div>
    );
  };

  // Configuration settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />
  };

  return (
    // Wrapper for the recipe slider
    <div className='recipe-slider'>
      <h2>Bläddra bland våra recept</h2> {/* Title for the slider */}
      {/* Render the slider only if random recipes are available */}
      {randomRecipes.length > 0 && (
        <Slider {...sliderSettings}> {/* Slider component with settings */}
          {/* Map through random recipes and render each as a slide */}
          {randomRecipes.map((recipe) => 
            <div key={recipe._id} className='image-slide'>
              <Link to={`/recipe/${recipe._id}`}></Link> {/* Link to recipe details */}
              <img src={recipe.imageUrl}/> {/* Image for the recipe */}
              <div className='cover'>{recipe.title}</div> {/* Title for the recipe */}
            </div>
          )}
        </Slider>
      )}
    </div>
  );
};

export default RecipeSlider;
