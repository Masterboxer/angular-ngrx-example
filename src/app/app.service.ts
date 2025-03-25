import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITodo } from './app.model';
import { Store } from '@ngrx/store';
import { selectAllTodos } from './state/todo.selector';
import { TodosApiActions } from './state/todo.action';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  httpClient = inject(HttpClient);
  private store = inject(Store);

  getAllTodosSubscription() {
    return this.httpClient.get<ITodo[]>(
      'https://jsonplaceholder.typicode.com/posts',
    );
  }

  getAllTodosList() {
    this.store
      .select(selectAllTodos)
      .pipe(
        first(),
        tap((todos) => {
          if (!todos || todos.length === 0) {
            this.getAllTodosSubscription().subscribe({
              next: (todos) => {
                this.store.dispatch(
                  TodosApiActions.retrievedTodosList({ todos }),
                );
              },
            });
          }
        }),
      )
      .subscribe();
  }
}
