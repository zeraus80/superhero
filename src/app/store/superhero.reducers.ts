import * as SuperheroActions from './superhero.actions';

const initialState = {
    superheroes: []
};

export function superheroReducer(state = initialState, action: SuperheroActions.SuperheroActions) {
    
    switch(action.type) {
        case SuperheroActions.ADD_SUPERHEROES:
            console.log('ADD_SUPERHEROES', action.payload);
            return {
                ...state,
                superheroes: [...state.superheroes, action.payload]
            };
        case SuperheroActions.EDIT_SUPERHERO:
            return {
                ...state,
                superheroes: [...state.superheroes, action.payload]
            };
        default:
            return state;        
    }

    return state;
}