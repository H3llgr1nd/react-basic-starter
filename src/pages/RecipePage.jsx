import { Box, Button, Image, Badge, Text, VStack, Heading, List, ListItem, Divider } from '@chakra-ui/react';

const RecipePage = ({recipe, setSelectedRecipe}) => {

    const handleBackButtonClick = () => {
      setSelectedRecipe(null);
    }

    return (
      <>
        <Button 
            position="absolute" 
            top="0" 
            left="0" 
            mt="2" 
            ml="2" 
            colorScheme="blue"
            onClick={handleBackButtonClick}
        >
            Back
        </Button>
        <Box p="5" maxW="3xl" mx="auto">
          <Image src={recipe.image} alt={`Picture of ${recipe.label}`} />
          <VStack spacing="5" align="stretch">
              <Heading>{recipe.label}</Heading>
              <Text fontSize="lg">Meal Type: {recipe.mealType.join(', ')}</Text>
              <Text fontSize="lg">Dish Type: {recipe.dishType.join(', ')}</Text>
              <Text fontSize="lg">Total Cooking Time: {recipe.totalTime ? `${recipe.totalTime} minutes` : 'N/A'}</Text>
              <Divider />
              
              <Box>
                  {recipe.dietLabels.map((label, index) => (
                      <Badge key={index} colorScheme="green" m="1">{label}</Badge>
                  ))}
                  {recipe.healthLabels.map((label, index) => (
                      <Badge key={index} colorScheme="purple" m="1">{label}</Badge>
                  ))}
                  {recipe.cautions.map((caution, index) => (
                      <Badge key={index} colorScheme="red" m="1">{caution}</Badge>
                  ))}
              </Box>
              
              <Divider />
              <Heading size="md">Ingredients:</Heading>
              <List styleType="disc">
                  {recipe.ingredientLines.map((ingredient, index) => (
                      <ListItem key={index}>{ingredient}</ListItem>
                  ))}
              </List>
              
              <Divider />
              <Text fontSize="lg">Servings: {recipe.yield}</Text>
              
              <Divider />
              <Heading size="md">Nutrition Facts:</Heading>
              <Text>Energy: {recipe.totalNutrients.ENERC_KCAL.quantity} {recipe.totalNutrients.ENERC_KCAL.unit}</Text>
              <Text>Protein: {recipe.totalNutrients.PROCNT.quantity} {recipe.totalNutrients.PROCNT.unit}</Text>
              <Text>Fat: {recipe.totalNutrients.FAT.quantity} {recipe.totalNutrients.FAT.unit}</Text>
              <Text>Carbs: {recipe.totalNutrients.CHOCDF.quantity} {recipe.totalNutrients.CHOCDF.unit}</Text>
              <Text>Cholesterol: {recipe.totalNutrients.CHOLE.quantity} {recipe.totalNutrients.CHOLE.unit}</Text>
              <Text>Sodium: {recipe.totalNutrients.NA.quantity} {recipe.totalNutrients.NA.unit}</Text>
          </VStack>
        </Box>
      </>
    );
}

export default RecipePage;