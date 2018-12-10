import * as SuperheroActions from './superhero.actions';

const initialState = {
    superheroes: []
};

export function superheroReducer(state = initialState, action: SuperheroActions.SuperheroActions) {

    let newState;

    switch (action.type) {
        case SuperheroActions.ADD_SUPERHEROES:
            newState = {
                superheroes: [...state.superheroes, ...action.payload]
            };
            break;
        case SuperheroActions.EDIT_SUPERHERO:
            newState = {
                ...state,
                superheroes: [...state.superheroes, action.payload]
            };
            break;
        default:
            newState = state;
            break;
    }

    console.log('newState', newState);
    return newState;
}