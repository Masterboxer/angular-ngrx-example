import { createReducer, on } from '@ngrx/store';
import { ITodo } from '../app.model';
import { TodosApiActions } from './todo.action';

export const initialState: ReadonlyArray<ITodo> = [];

export const todosReducer = createReducer(
  initialState,
  on(TodosApiActions.retrievedTodosList, (_state, { todos }) => todos),
);
