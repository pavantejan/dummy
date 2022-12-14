import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes!: Recipe[];

  
  constructor(private recipeService : RecipeService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
  }  

  addRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
