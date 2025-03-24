import { Component, inject, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllTodos } from '../state/todo.selector';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnInit {
  appService = inject(AppService);
  private store = inject(Store);

  todos$ = this.store.select(selectAllTodos);

  ngOnInit() {
    this.appService.getAllTodosList();
  }
}
