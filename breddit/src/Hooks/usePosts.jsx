import { useEffect, useReducer } from 'react';
import postsReducer from '../Reducers/postsReducer';
import { serverUrl } from '../Constants/main';
import axios from 'axios';
import * as A from '../Constants/actions';

export default function usePosts(page) {

    const [posts, dispachPosts] = useReducer(postsReducer, null);


    useEffect(_ => {

        console.log('usePosts', page);

        if (page !== '') {  // '' stringas simbolizuoja pagrindinį puslapį (home)
            return;
        }
        axios.get(serverUrl + 'posts')
            .then(response => {
                dispachPosts({ 
                    type: A.LOAD_ALL_POSTS, 
                    payload: response.data 
                });
            })
            .catch(error => {
                console.error(error);
            })
    }, [page]);


    return { posts };

}