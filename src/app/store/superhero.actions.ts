import {Action} from '@ngrx/store';
import { Superhero } from '../model/superhero.model';

export const UPDATE_SUPERHERO = 'UPDATE_SUPERHERO';
export const ADD_SUPERHEROES = 'ADD_SUPERHEROES';

export class AddSuperheroes implements Action {
    readonly type = ADD_SUPERHEROES;

    constructor(public payload: Superhero[]) {}
}

export class UpdateSuperhero implements Action {

    readonly type = UPDATE_SUPERHERO;
    constructor(public payload: {index: number, superhero: Superhero}) {}
}

export type SuperheroActions = UpdateSuperhero | AddSuperheroes;