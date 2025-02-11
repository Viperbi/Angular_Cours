import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-b',
  imports: [FormsModule],
  templateUrl: './data-b.component.html',
  styleUrl: './data-b.component.css',
})
export class DataBComponent {
  inputTexte: string = 'Ceci est du texte';

  onClick(event: any) {
    this.inputTexte = '';
  }
}
