import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import InfoComponent from '../info/info';
@Component({
  selector: 'app-shop',
  imports: [CommonModule, ReactiveFormsModule, InfoComponent],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export default class Shop {
question = "What's your name?";
  answer = "unknown";

  appForm = new FormGroup({
    answer: new FormControl('')
  });

  onSubmit() {
    this.answer = this.appForm.value.answer ?? 'unknown';
    console.log('Answer submitted:', this.answer);
  }
}
