import * as type from '../Constants/nice';


export default function niceCountReducer(state, action) {

    let newState;

    switch (action.type) {

        case type.ADD1:
            newState = state + 1;
            break;
        case type.REM1:
            newState = state - 1;
            break;
        case type.ADD:
            newState = state + action.payload;
            break;
        case type.MULTI:
            newState = state * action.payload;
            break;
        case type.RESET:
            newState = 0;
            break;
        case type.ADD5:
            newState = state + 5;
            break;
        default:
            newState = state;
    }

    return newState;

}