import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // selectedRecipe = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Alu fry','Which is made up to potatos','https://i.ytimg.com/vi/L7ygskKUG28/maxresdefault.jpg',[
      new Ingredient('Meat',1),
      new Ingredient('Meat',3)
    ]),
    new Recipe('French Fries','Which is made up to potatos','https://i.ytimg.com/vi/L7ygskKUG28/maxresdefault.jpg',[
      new Ingredient('Meat',1),
      new Ingredient('Meat',3)
    ])
  ];

  constructor(private shoppinglist:ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes.slice()[index];
  } 

  addIngredientstoShoppingList(ingredients:Ingredient[]){
      this.shoppinglist.addIngredientsFromRecipe(ingredients);
  }

}
