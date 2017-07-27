import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://s-media-cache-ak0.pinimg.com/736x/04/e0/52/04e0524d891999c1c435c1b1a707da5e--breakfast-photography-food-photography-styling.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://s-media-cache-ak0.pinimg.com/736x/04/e0/52/04e0524d891999c1c435c1b1a707da5e--breakfast-photography-food-photography-styling.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
