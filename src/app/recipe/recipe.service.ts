import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  
  recipeSelected =new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe('Burger','Burger whith chicken black paper',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('meal',1),
      new Ingredient('tomato',2)

    ]),
    new Recipe('Green Tea Lapis Gayatri','cake with green tea chocolate','../src/app/img/green_tea.png',
    [
      new Ingredient('flour',2),
      new Ingredient('green tea chocolate',2),
      new Ingredient('sugar',3)

    ]),
    ];

    getRecipes(){
      return this.recipes.slice();
    }
    addIngredientsShoppingList(ingredients : Ingredient[]){
      this.slsService.addIngredients(ingredients);
    }
constructor(private slsService : ShoppingListService) { }

}
