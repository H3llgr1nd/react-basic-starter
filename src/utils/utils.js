export const filteredRecipes = (recipes, filterRecipesByText) => {
    return recipes.filter(recipeObj => {
        const recipe = recipeObj.recipe
        const searchLower = filterRecipesByText.toLowerCase();
        return recipe.label.toLowerCase().includes(searchLower) ||
            recipe.healthLabels.some(label => label.toLowerCase().includes(searchLower)) || 
            recipe.dietLabels.some(label => label.toLowerCase().includes(searchLower)) ||
            recipe.cautions.some(label => label.toLowerCase().includes(searchLower));
    });   
}