import { useState } from 'react';
import RecipeListPage from './pages/RecipeListPage';
import RecipePage from './pages/RecipePage';
import { data } from './utils/data'
import { filteredRecipes } from './utils/utils'

export const App = () => {
  const recipes = data.hits;
  const [filterRecipesByText, setFilterRecipesByText] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <>
      {selectedRecipe !== null && 
        <RecipePage 
          recipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
        />
      }
      {selectedRecipe == null && 
        <RecipeListPage 
          recipes={filteredRecipes(recipes, filterRecipesByText)} 
          filterRecipesByText={filterRecipesByText} 
          setFilterRecipesByText={setFilterRecipesByText}
          setSelectedRecipe={setSelectedRecipe}
        />
      }
    </>
  );
};
