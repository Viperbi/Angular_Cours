import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css',
})
export class OneFriendComponent {
  title: string = `Bienvenue dans le tuto Angular! sur le text interpolation`;
  description: string =
    "La text interpolation vous permet d'afficher des données dynamiques dans votre template.";
  currentDate: Date = new Date();
  status: string = 'Offline';
  age: string = '22 ans';
  username: string = 'Dark Max';
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  style: string = this.username == 'Dark Max' ? 'ringard' : 'stylé';
  photo: string =
    'data:image/jpeg;base64,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';

  getWelcomeMessage(): string {
    return `Bienvenue, ${this.username}, dans cette leçon d'Angular!`;
  }

  getStatus(): string {
    return this.status == 'Offline' ? this.status : this.age;
  }
}
