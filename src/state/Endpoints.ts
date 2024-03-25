//Hampus

import { create } from "zustand";
import { RecipeInterface } from "../interfaces/RecipeInterface";
import axios from "axios";
import { categoryInterface } from "../interfaces/CategoryInterface";

interface recipeStateInterface {
  recipeList: RecipeInterface[];
  oneRecipe: RecipeInterface;
  categoryList: categoryInterface[];
  setOneRecipe: (recipe: RecipeInterface) => void;
  fetchAllRecipes: () => Promise<void>;
  addRecipe: (newRecipe: RecipeInterface) => Promise<void>;
  deleteRecipe: (id: string) => Promise<void>;
  fetchOneRecipe: (id: string) => Promise<void>;
  fetchAllCategories: () => Promise<void>;
  fetchOneCategory: (categoryName: string) => Promise<void>;
  addRating: (rating: number, id: string | undefined) => Promise<void>;
}

const URL = "https://sti-java-grupp4-s4yjx9.reky.se";

const allRecipeState = create<recipeStateInterface>()((set) => ({
  recipeList: [],
  oneRecipe: {} as RecipeInterface,
  categoryList: [],

  setOneRecipe: (recipe: RecipeInterface) => {
    set({oneRecipe: recipe})
  },

  fetchAllRecipes: async () => {
    try {
      const response = await axios.get(`${URL}/recipes`);
      if (response.status === 200) {
        set({ recipeList: response.data });
      }
    } catch (error) {
      console.error("Error fetching all recipes", error);
    }
  },

  fetchOneRecipe: async (id) => {
    try {
      const response = await axios.get(`${URL}/recipes/${id}`);
      if (response.status === 200) {
        console.log("Successfull get");
        set((state) => ({
          ...state,
          oneRecipe: response.data,
        }));
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  },

  fetchAllCategories: async () => {
    try {
      const response = await axios.get(`${URL}/categories`);
      if (response.status === 200) {
        console.log("Successfull get");
        set({ categoryList: response.data });
      }
    } catch (error) {
      console.error("Error fetching all categories", error);
    }
  },

  fetchOneCategory: async (categoryName: string) => {
    try {
      const response = await axios.get(
        `${URL}/categories/${categoryName}/recipes`
      );
      if (response.status === 200) {
        console.log("Successfull get");
        set({ recipeList: response.data });
      }
    } catch (error) {
      console.error("Error fetching recipes by category:", error);
    }
  },

  addRecipe: async (newRecipe: RecipeInterface) => {
    try {
      const response = await axios.post<RecipeInterface>(`${URL}/recipes`,newRecipe);

      if (response.status === 200) {
        console.log("Successful post: ", response.data);
        console.log(response.status);
        set((prevState) => ({
          ...prevState,
          recipeList: [...prevState.recipeList, newRecipe]
        }));
      }
    } catch (error) {
      console.error("Error from post attempt:", error);
    }
  },

  deleteRecipe: async (id) => {
    try {
      const response = await axios.delete(`${URL}/recipes/${id}`);
      if (response.status === 204) {
        console.log("Recipe deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  },

  addRating: async (rating, id) => {
    try {
      const response = await axios.post(
        `https://sti-java-grupp4-s4yjx9.reky.se/recipes/${id}/ratings`,
        { rating: rating }
      );
      if (response.status === 200) {
        console.log(
          `Rating ${rating}/5 has been updated for recipe:${id} in the database`
        );
        alert("Tack för ditt betyg");
      }
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  }
}));

export default allRecipeState;
