import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ListFriendComponent } from './list-friend/list-friend.component';
import { DataBComponent } from './data-b/data-b.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'list', component: ListFriendComponent },
  { path: 'dataB', component: DataBComponent },
];
