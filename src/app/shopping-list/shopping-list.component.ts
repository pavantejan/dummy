import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  
  ingredients!: Ingredient[];

  private changedSubscription! : Subscription;

  constructor(private shoppingList:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingList.getIngredients();
    this.changedSubscription = this.shoppingList.changedIngredients.subscribe(
      (ingredient:Ingredient[])=>{
          this.ingredients=ingredient;
      }
    );
  }

  ngOnDestroy(){
    this.changedSubscription.unsubscribe();
  }

}
