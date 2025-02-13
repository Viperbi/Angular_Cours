import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tp-enfant2',
  imports: [FormsModule],
  templateUrl: './tp-enfant2.component.html',
  styleUrl: './tp-enfant2.component.css',
})
export class TpEnfant2Component {
  profil: { nom: string; age: number } = { nom: '', age: 0 };

  onAddArticle() {
    const profil = {
      nom: this.profil.nom,
      age: this.profil.age,
    };
    this.donneesSent.emit(profil);
  }
  @Output() donneesSent = new EventEmitter<{ nom: string; age: number }>();
}
