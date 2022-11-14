import { EventEmitter, Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  
  changedIngredients = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Lemon',15)
  ];
  
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.changedIngredients.next(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredients:Ingredient[]){
      for (let ingredient of ingredients){
        this.ingredients.push(ingredient);
      } 
      this.changedIngredients.next(this.ingredients.slice());
  }

}
