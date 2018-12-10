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
        case SuperheroActions.UPDATE_SUPERHERO:
            const superhero = state.superheroes[action.payload.index];
            const updatedSuperhero = {
                ...superhero,
                ...action.payload.superhero
            };
            const superheroes = [...state.superheroes];
            superheroes[action.payload.index] = updatedSuperhero;

            newState = { superheroes };
            break;
        default:
            newState = state;
            break;
    }

    console.log('newState', newState);
    return newState;
}