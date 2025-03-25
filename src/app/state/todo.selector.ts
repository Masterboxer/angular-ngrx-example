import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITodo } from '../app.model';

export const selectTodosFeature =
  createFeatureSelector<ReadonlyArray<ITodo>>('todos');

export const selectAllTodos = createSelector(
  selectTodosFeature,
  (todos) => todos,
);

export const selectTodoById = (todoId: number) =>
  createSelector(selectTodosFeature, (todos) =>
    todos.find((todo) => todo.id === todoId),
  );
