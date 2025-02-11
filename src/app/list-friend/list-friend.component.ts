import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OneFriendComponent } from './one-friend/one-friend.component';

@Component({
  selector: 'app-list-friends',
  imports: [FormsModule, NgIf, OneFriendComponent, NgFor],
  templateUrl: './list-friend.component.html',
  styleUrl: './list-friend.component.css',
})
export class ListFriendComponent {
  listFriendsCreated: boolean = false;
  listFriendsAuth: boolean = false;
  listFriendsDisplay: boolean = false;
  listFriendsCreationStatus: string = '🥶 Aucun ami ...';
  listFriendsInputText: string = '';
  listFriendTab: { name: string; age: number; email: string }[] = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' },
  ];
  constructor() {
    // setTimeout(() => {
    //   this.listFriendsAuth = true;
    // }, 10000);
  }

  onAddingFriends(): void {
    this.listFriendsCreationStatus = `🥳 Votre ami (${this.listFriendsInputText}) a été ajouté !`;
    this.listFriendsCreated = !this.listFriendsCreated;
  }
  onUpdateFriendsList(eventInput: Event): void {
    console.log(eventInput);
    console.log((<HTMLInputElement>eventInput.target).value);
    this.listFriendsInputText = (<HTMLInputElement>eventInput.target).value;
  }
}
