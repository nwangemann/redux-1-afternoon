import {createStore} from 'redux';

let initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    list: []
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const UPDATE_AUTHORFIRST = "UPDATE_AUTHORFIRST"
export const UPDATE_AUTHORLAST = "UPDATE_AUTHORLAST"
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS"
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS"
export const UPDATE_LIST = "UPDATE_LIST"


function reducer(state = initialState, action){
    const { type, payload } = action

    switch(type){
        case UPDATE_NAME: 
        return {
            ...state,
            name: payload
        }
        case UPDATE_CATEGORY: 
        return {
            ...state,
            category: payload
        }
        case UPDATE_AUTHORFIRST: 
        return {
            ...state,
            authorFirst: payload
        }
        case UPDATE_AUTHORLAST: 
        return {
            ...state,
            authorLast: payload
        }
        case UPDATE_INGREDIENTS: 
        const newIngredients = [...state.ingredients, payload]
        return {
            ...state,
            ingredients: newIngredients
        }
        case UPDATE_INSTRUCTIONS: 
        const newInstructions = [...state.instructions, payload]
        return {
            ...state,
            instructions: newInstructions
        }
        case UPDATE_LIST:
            let newRecipe = {
                name: state.name,
                category: state.category,
                authorFirst: state.authorFirst,
                authorLast: state.authorLast,
                ingredients: state.ingredients,
                instructions: state.instructions
            }
            let newList = [...state.list, newRecipe]
            return {
                ...state, 
                list: newList
            }
        // case CLEAR_FIELDS: 
        default: return state
    }
}

export default createStore(reducer);