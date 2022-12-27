const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

/* 
make a list of recipes from this array
each recipe should display title as h2 and ingredients in a ul
*/

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => 
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient => 
              <li key={ingredient}>
                {ingredient}
              </li>  
            )}
          </ul>
        </div>  
      )}
    </div>
  );
}

/* 
each recipe already include an id field so the outer loop uses it

there is not ID to loop over ingredients, but the name can server as a key alternative.

you can also change the data structure to add IDs or use index as a key with the caveat that it isn't safe to reorder elements
*/

