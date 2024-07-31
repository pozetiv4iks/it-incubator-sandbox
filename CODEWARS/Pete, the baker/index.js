function cakes(recipe, available) {
    let maxCakes = Infinity; // Start with a large number
      
      for (const ingredient in recipe) {
          if (recipe.hasOwnProperty(ingredient)) {
              const requiredAmount = recipe[ingredient];
              const availableAmount = available[ingredient] || 0; // Use 0 if the ingredient is not available
              const possibleCakes = Math.floor(availableAmount / requiredAmount); // Calculate possible cakes for this ingredient
              
              if (possibleCakes < maxCakes) {
                  maxCakes = possibleCakes; // Update maxCakes with the minimum found
              }
          }
      }
      
      return maxCakes === Infinity ? 0 : maxCakes;
  }