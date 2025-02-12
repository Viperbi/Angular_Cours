import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../../../model/article.interface';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css',
})
export class AddArticleComponent {
  @Output() articleCreated = new EventEmitter<Article>();
}
