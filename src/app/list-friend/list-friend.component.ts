import { Component, OnInit } from '@angular/core';
import { OneFriendComponent } from './one-friend/one-friend.component';

@Component({
  selector: 'app-list-friend',
  imports: [OneFriendComponent],
  templateUrl: './list-friend.component.html',
  styleUrl: './list-friend.component.css',
})
export class ListFriendComponent implements OnInit {
  inputValue: string = '';
  boutton: boolean = false;
  ami: string = 'Aucun Ami';
  ngOnInit(): void {
    setTimeout(() => {
      this.boutton = !this.boutton;
    }, 3000);
  }

  onKey(event: any) {
    this.inputValue = event.target.value;
  }
  onClick(event: any) {
    this.ami = 'Ami Ajouté';
  }
}
