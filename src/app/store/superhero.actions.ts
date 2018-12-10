import {Action} from '@ngrx/store';
import { Superhero } from '../model/superhero.model';

export const EDIT_SUPERHERO = 'EDIT_SUPERHERO';
export const ADD_SUPERHEROES = 'ADD_SUPERHEROES';

export class AddSuperheroes implements Action {
    readonly type = ADD_SUPERHEROES;

    constructor(public payload: Superhero[]) {}
}

export class EditSuperhero implements Action {

    readonly type = EDIT_SUPERHERO;
    constructor(public payload: Superhero) {}
}

export type SuperheroActions = EditSuperhero | AddSuperheroes;