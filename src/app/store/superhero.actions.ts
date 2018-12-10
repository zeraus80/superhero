import {Action} from '@ngrx/store';

export const EDIT_SUPERHERO = 'EDIT_SUPERHERO';

export class EditSuperhero implements Action {

    readonly type = EDIT_SUPERHERO;
    payload: any;

}

export type SuperheroActions = EditSuperhero;