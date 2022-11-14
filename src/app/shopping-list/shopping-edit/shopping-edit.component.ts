import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('itemName',{static:false}) nameInputRef! : ElementRef;
  @ViewChild('itemAmount',{static:false}) amountInputRef! : ElementRef;

  constructor(private shoppingList : ShoppingListService) { }

  ngOnInit(): void {
  }

  addItem(): void{  
      const itemName = this.nameInputRef.nativeElement.value;
      const itemAmount = this.amountInputRef.nativeElement.value;
      const ingredient = new Ingredient(itemName,itemAmount);

      this.shoppingList.addIngredient(ingredient);
  } 

}
