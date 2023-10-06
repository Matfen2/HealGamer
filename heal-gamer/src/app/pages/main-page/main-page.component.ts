import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  log = {
    message: '',
  };

  showGuide(value: NgForm) {
    console.log(value);
  }

  ideas = [
    {
      id: 1,
      when: 'Petits-Déjeuners',
      pict: '/assets/picts/main-page/breakfastIdeas.png',
    },
    {
      id: 2,
      when: 'Repas de Midi',
      pict: '/assets/picts/main-page/lunchIdeas.jpeg',
    },
    {
      id: 3,
      when: 'Diner du Soir',
      pict: '/assets/picts/main-page/dinnerIdeas.jpg',
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
