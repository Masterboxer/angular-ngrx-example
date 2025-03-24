import { createActionGroup, props } from '@ngrx/store';
import { ITodo } from '../app.model';

export const TodosActions = createActionGroup({
  source: 'Todos',
  events: {
    'Add Todo': props<{ todoId: string }>(),
    'Remove Todo': props<{ todoId: string }>(),
  },
});

export const TodosApiActions = createActionGroup({
  source: 'Todos API',
  events: {
    'Retrieved Todos List': props<{ todos: ReadonlyArray<ITodo> }>(),
  },
});
