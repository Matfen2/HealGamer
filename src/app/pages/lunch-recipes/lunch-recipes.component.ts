import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lunch-recipes',
  templateUrl: './lunch-recipes.component.html',
  styleUrls: ['./lunch-recipes.component.css'],
})
export class LunchRecipesComponent implements OnInit {
  showRecipeId!: number;
  showRecipeDetails: any;

  constructor(private routes: ActivatedRoute) {}

  showRecipeData = [
    {
      id: 1,
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
      title: 'PANCAKES',
      time: '15 Min',
      firstIngredient: "70g de poudre d'amandes déshuilées",
      secondIngredient: '2 Oeufs',
      thirdIngredient: '1 Banane',
      fourIngredient: "20 g de Sirop d'érable",
      firstStep: 'Mélanger les ingrédients dans un mixeur ou dans un blender',
      secondStep: "Ajouter un peu de l'huile de coco sur la caserolle",
      thirdStep:
        'Metter une quantité du mélange sur la caserolle et la cuire a feux soux sans oublier de la retourner au bout de 3-4 min',
    },
    {
      id: 2,
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
      title: 'PANCAKES',
      time: '15 Min',
      firstIngredient: "70g de poudre d'amandes déshuilées",
      secondIngredient: '2 Oeufs',
      thirdIngredient: '1 Banane',
      fourIngredient: "20 g de Sirop d'érable",
      firstStep: 'Mélanger les ingrédients dans un mixeur ou dans un blender',
      secondStep: "Ajouter un peu de l'huile de coco sur la caserolle",
      thirdStep:
        'Metter une quantité du mélange sur la caserolle et la cuire à feux soux sans oublier de la retourner au bout de 3-4 min',
    },
    {
      id: 3,
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
      title: 'PANCAKES',
      time: '15 Min',
      firstIngredient: "70g de poudre d'amandes déshuilées",
      secondIngredient: '2 Oeufs',
      thirdIngredient: '1 Banane',
      fourIngredient: "20 g de Sirop d'érable",
      firstStep: 'Mélanger les ingrédients dans un mixeur ou dans un blender',
      secondStep: "Ajouter un peu de l'huile de coco sur la caserolle",
      thirdStep:
        'Metter une quantité du mélange sur la caserolle et la cuire à feux soux sans oublier de la retourner au bout de 3-4 min',
    },
    {
      id: 4,
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
      title: 'PANCAKES',
      time: '15 Min',
      firstIngredient: "70g de poudre d'amandes déshuilées",
      secondIngredient: '2 Oeufs',
      thirdIngredient: '1 Banane',
      fourIngredient: "20 g de Sirop d'érable",
      firstStep: 'Mélanger les ingrédients dans un mixeur ou dans un blender',
      secondStep: "Ajouter un peu de l'huile de coco sur la caserolle",
      thirdStep:
        'Metter une quantité du mélange sur la caserolle et la cuire à feux soux sans oublier de la retourner au bout de 3-4 min',
    },
    {
      id: 5,
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
      title: 'PANCAKES',
      time: '15 Min',
      firstIngredient: "70g de poudre d'amandes déshuilées",
      secondIngredient: '2 Oeufs',
      thirdIngredient: '1 Banane',
      fourIngredient: "20 g de Sirop d'érable",
      firstStep: 'Mélanger les ingrédients dans un mixeur ou dans un blender',
      secondStep: "Ajouter un peu de l'huile de coco sur la caserolle",
      thirdStep:
        'Metter une quantité du mélange sur la caserolle et la cuire à feux soux sans oublier de la retourner au bout de 3-4 min',
    },
    {
      id: 6,
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
      title: 'PANCAKES',
      time: '15 Min',
      firstIngredient: "70g de poudre d'amandes déshuilées",
      secondIngredient: '2 Oeufs',
      thirdIngredient: '1 Banane',
      fourIngredient: "20 g de Sirop d'érable",
      firstStep: 'Mélanger les ingrédients dans un mixeur ou dans un blender',
      secondStep: "Ajouter un peu de l'huile de coco sur la caserolle",
      thirdStep:
        'Metter une quantité du mélange sur la caserolle et la cuire à feux soux sans oublier de la retourner au bout de 3-4 min',
    },
    {
      id: 7,
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
      title: 'PANCAKES',
      time: '15 Min',
      firstIngredient: "70g de poudre d'amandes déshuilées",
      secondIngredient: '2 Oeufs',
      thirdIngredient: '1 Banane',
      fourIngredient: "20 g de Sirop d'érable",
      firstStep: 'Mélanger les ingrédients dans un mixeur ou dans un blender',
      secondStep: "Ajouter un peu de l'huile de coco sur la caserolle",
      thirdStep:
        'Metter une quantité du mélange sur la caserolle et la cuire à feux soux sans oublier de la retourner au bout de 3-4 min',
    },
    {
      id: 8,
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
      title: 'PANCAKES',
      time: '15 Min',
      firstIngredient: "70g de poudre d'amandes déshuilées",
      secondIngredient: '2 Oeufs',
      thirdIngredient: '1 Banane',
      fourIngredient: "20 g de Sirop d'érable",
      firstStep: 'Mélanger les ingrédients dans un mixeur ou dans un blender',
      secondStep: "Ajouter un peu de l'huile de coco sur la caserolle",
      thirdStep:
        'Metter une quantité du mélange sur la caserolle et la cuire à feux soux sans oublier de la retourner au bout de 3-4 min',
    },
    {
      id: 9,
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
      title: 'PANCAKES',
      time: '15 Min',
      firstIngredient: "70g de poudre d'amandes déshuilées",
      secondIngredient: '2 Oeufs',
      thirdIngredient: '1 Banane',
      fourIngredient: "20 g de Sirop d'érable",
      firstStep: 'Mélanger les ingrédients dans un mixeur ou dans un blender',
      secondStep: "Ajouter un peu de l'huile de coco sur la caserolle",
      thirdStep:
        'Metter une quantité du mélange sur la caserolle et la cuire à feux soux sans oublier de la retourner au bout de 3-4 min',
    },
  ];

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.showRecipeId = +params['id']; // Convertir la chaîne en nombre
      this.showRecipeDetails = this.showRecipeData.find(
        (recipe) => recipe.id === this.showRecipeId
      );
    });
  }
}
