import {createAction, createReducer} from "@reduxjs/toolkit";


// const actionCreator = createAction('SOME_ACTION_TYPE');
// console.log(actionCreator.toString());
// // SOME_ACTION_TYPE
//
// console.log(actionCreator.type);
// // SOME_ACTION_TYPE
//
// const reducer = createReducer({}, (builder) => {
//     // Здесь будет автоматически вызван `actionCreator.toString()`
//     // Кроме того, при использовании TypeScript, будет правильно предложен (предположен) тип операции
//     builder.addCase(actionCreator, (state, action) => {});
// });

const initialState = [
    {
    token: '123',
    date: '10.09'
    }
]

function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TOKEN': {
            return [
                ...state,
                action.payload
            ]
        }
        break;
        default:
            return state
    }
}
export default todosReducer;