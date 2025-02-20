import * as A from '../Constants/actions.js';

export default function postsReducer(state, action) {

    let newState = null === state ? null : structuredClone(state);

    console.log('Suveikia postsReducer', action.type);

    switch (action.type) {
        case A.LOAD_ALL_POSTS:
            newState = action.payload;
            break;
       
        default:
            break;
    }

    return newState;
    
}