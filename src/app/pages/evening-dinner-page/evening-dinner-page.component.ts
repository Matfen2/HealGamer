import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-evening-dinner-page',
  templateUrl: './evening-dinner-page.component.html',
  styleUrls: ['./evening-dinner-page.component.css'],
})
export class EveningDinnerPageComponent {
  recipes = [
    {
      id: 1,
      title: 'Pancakes',
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
    },
    {
      id: 2,
      title: 'Pancakes',
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
    },
    {
      id: 3,
      title: 'Pancakes',
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
    },
    {
      id: 4,
      title: 'Pancakes',
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
    },
    {
      id: 5,
      title: 'Pancakes',
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
    },
    {
      id: 6,
      title: 'Pancakes',
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
    },
    {
      id: 6,
      title: 'Pancakes',
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
    },
    {
      id: 6,
      title: 'Pancakes',
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
    },
    {
      id: 6,
      title: 'Pancakes',
      pict: '/assets/picts/breakfast-page/pancakes.jpg',
    },
  ];

  person = {
    user: '',
    email: '',
    message: '',
  };

  showContact(value: NgForm) {
    console.log(value);
  }
}
