import { Component, Output, EventEmitter } from '@angular/core';
import { TpEnfant1Component } from './tp-enfant1/tp-enfant1.component';
import { TpEnfant2Component } from './tp-enfant2/tp-enfant2.component';

@Component({
  selector: 'app-tp-parent',
  imports: [TpEnfant1Component, TpEnfant2Component],
  templateUrl: './tp-parent.component.html',
  styleUrl: './tp-parent.component.css',
})
export class TpParentComponent {
  profil: { nom: string; age: number } = { nom: '', age: 0 };
  onSendDonnees() {
    const profil = {
      nom: this.profil.nom,
      age: this.profil.age,
    };
    this.donneesSent.emit(profil);
  }
}
