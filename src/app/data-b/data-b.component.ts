import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-b',
  imports: [FormsModule, CommonModule],
  templateUrl: './data-b.component.html',
  styleUrl: './data-b.component.css',
})
export class DataBComponent {
  inputTexte: string = 'Ceci est du texte';
  amiCreated: boolean = false;
  ami: string = '';

  onClick() {
    this.ami = this.inputTexte;
    this.inputTexte = '';
    this.amiCreated = true;
  }
}
