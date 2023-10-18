import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-anti-inflammatory-page',
  templateUrl: './anti-inflammatory-page.component.html',
  styleUrls: ['./anti-inflammatory-page.component.css']
})
export class AntiInflammatoryPageComponent {
  person = {
    user: '',
    email: '',
    message: ''
  }

  showContact (value: NgForm) {
    console.log(value);
  }
}
