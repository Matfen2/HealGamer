import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-well-page',
  templateUrl: './well-page.component.html',
  styleUrls: ['./well-page.component.css'],
})
export class WellPageComponent {
  sports = [
    {
      id: 1,
      pict: '/assets/picts/heal-page/yoga.jpg',
    },
    {
      id: 2,
      pict: '/assets/picts/heal-page/footing.jpg',
    },
    {
      id: 3,
      pict: '/assets/picts/heal-page/marcher.jpg',
    },
    {
      id: 4,
      pict: '/assets/picts/heal-page/velo.jpg',
    },
  ];

  materiels = [
    {
      id: 1,
      price: '49.99',
      hrefBuy:
        'https://www.amazon.fr/ALLJOY-Chauffage-Électrique-Rangement-3D-rotation/dp/B097D4NTBN/ref=sr_1_5?crid=2KF51N7FKWXT2&keywords=masseur%2Bde%2Bnuque&qid=1696517418&sprefix=masseur%2Bde%2Bn%2Caps%2C88&sr=8-5&th=1',
      pict: '/assets/picts/heal-page/masseurDeNuque-removebg-preview.png',
    },
    {
      id: 2,
      price: '14.99',
      hrefBuy:
        'https://www.amazon.fr/Correcteur-Redresseur-Réglable-Supérieure-Corriger/dp/B0CH27WJ62/ref=sr_1_23?crid=2AHV8RB63YGRO&keywords=correcteur%2Bde%2Bposture&qid=1696517479&sprefix=correc%2Caps%2C104&sr=8-23&th=1',
      pict: '/assets/picts/heal-page/correcteurDePosture-removebg-preview.png',
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
