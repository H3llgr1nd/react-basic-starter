import { Box, Image, Text, Badge, HStack, VStack } from '@chakra-ui/react';

const RecipeCard = ({recipe, setSelectedRecipe}) => {
    const {image, label, healthLabels, dietLabels, cautions, mealType, dishType} = recipe;

    const handleClick = () => {
        setSelectedRecipe(recipe);
    }
    
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5" onClick={handleClick}>
            <Image src={image} alt={`Picture of ${label}`} height="200px" width="100%"/>
            <VStack align="start" mt="4">
                <Text fontWeight="bold" fontSize="xl">{label}</Text>
                <HStack>
                    {healthLabels.includes('Vegan') &&
                        <Badge colorScheme="teal">Vegan</Badge>
                    }
                    {healthLabels.includes('Vegetarian') &&
                        <Badge colorScheme="orange">Vegetarian</Badge>
                    }
                    {healthLabels.includes('Pescatarian') &&
                        <Badge colorScheme="blue">Pescatarian</Badge>
                    }
                </HStack>
                {dietLabels.length > 0 && dietLabels.map((label, index) => (
                    <Badge key={index} colorScheme="green" mr="2">{label}</Badge>
                ))}
                {cautions.length > 0 && cautions.map((caution, index) => (
                    <Badge key={index} colorScheme="red" mr="2">{caution}</Badge>
                ))}
                

                <Text fontSize="md">Meal Type: {mealType.join(", ")}</Text>
                <Text fontSize="md">Dish Type: {dishType.join(", ")}</Text>
            </VStack>
        </Box>
    );
}

export default RecipeCard;