import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lunch-page',
  templateUrl: './lunch-page.component.html',
  styleUrls: ['./lunch-page.component.css'],
})
export class LunchPageComponent {
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
