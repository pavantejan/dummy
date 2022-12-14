import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe!:Recipe;

  index!:number;

  
  constructor(private recipetoslist:RecipeService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params)=>{
        this.index=+params['id'];
        this.recipe=this.recipetoslist.getRecipe(this.index);
      }
    );
  }

  addtoShoppinglist(){
    this.recipetoslist.addIngredientstoShoppingList(this.recipe.ingredients);
  }

  editRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
}
