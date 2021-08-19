import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test','Test recipe','https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.simplyrecipes.com%2Fthmb%2FOCi18J2V8OeKDFV3FxoeKvgq74E%3D%2F1423x1067%2Fsmart%2Ffilters%3Ano_upscale()%2F__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg&imgrefurl=https%3A%2F%2Fwww.simplyrecipes.com%2Frecipes%2Fgrilled_sweet_potatoes%2F&tbnid=7YWDSrj7P3noTM&vet=12ahUKEwjxraXx9LXyAhUFNRoKHelTB1kQMygCegUIARDxAQ..i&docid=XTj0jEEaNW_cwM&w=1423&h=1067&q=recipe&ved=2ahUKEwjxraXx9LXyAhUFNRoKHelTB1kQMygCegUIARDxAQ')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
