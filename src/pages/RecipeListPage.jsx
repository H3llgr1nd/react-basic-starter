import { Center, Input, SimpleGrid } from '@chakra-ui/react';
import RecipeCard from '../components/ui/RecipeCard.jsx';

const RecipeListPage = ({recipes, filterRecipesByText, setFilterRecipesByText, setSelectedRecipe}) => {
  return (
    <Center flexDir="column">
      <Center>
       <Input
          width="800px"
          placeholder="Search by health label or keyword"
          value={filterRecipesByText}
          onChange={(e) => setFilterRecipesByText(e.target.value)}
          mb="8"
        />
      </Center>
      <SimpleGrid columns={{sm: 1, md: 2, lg: 4}} spacing="8" p="5">
      {recipes.map((recipe) => (
          <RecipeCard
            recipe={recipe.recipe} 
            key={recipe.label}
            setSelectedRecipe={setSelectedRecipe}
          />
      ))}
      </SimpleGrid>
    </Center>
  );
};

export default RecipeListPage;