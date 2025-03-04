import * as A from '../Constants/actions.js';

export default function postsReducer(state, action) {

    let newState = null === state ? null : structuredClone(state);

    console.log('Suveikia postsReducer', action.type);

    switch (action.type) {
        case A.LOAD_ALL_POSTS:
            newState = action.payload;
            break;

        case A.UPVOTE_POST:
            {
                if (action.user.role === 'guest') {
                    break;
                }
                const { likes } = newState.find(p => p.id === action.postId);

                const l = new Set(likes.l);
                const d = new Set(likes.d);
                const id = action.user.id;

                d.delete(id);
                if (l.has(id)) {
                    l.delete(id);
                } else {
                    l.add(id);
                }

                likes.l = [...l];
                likes.d = [...d];

                // console.log(action, l, d);
                break;
            }

        case A.DOWNVOTE_POST:
            {
                if (action.user.role === 'guest') {
                    break;
                }

                const { likes } = newState.find(p => p.id === action.postId);

                const l = new Set(likes.l);
                const d = new Set(likes.d);
                const id = action.user.id;

                l.delete(id);
                if (d.has(id)) {
                    d.delete(id);
                } else {
                    d.add(id);
                }

                likes.l = [...l];
                likes.d = [...d];

                break;
            }

            case A.ADD_1_COMMENT:
                newState = newState.map(p => p.id === action.postId ? {...p, comments: p.comments + 1} : p);
                break;

        default:
            break;
    }

    return newState;

}