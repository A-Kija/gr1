import { useEffect, useReducer } from 'react';
import postsReducer from '../Reducers/postsReducer';
import { serverUrl } from '../Constants/main';
import axios from 'axios';
import * as A from '../Constants/actions';

export default function usePosts(page) {

    const [posts, dispachPosts] = useReducer(postsReducer, null);

    console.log('perkraunamas usePosts posts', posts);

    useEffect(_ => {

        if (page !== '' && page !== 'home') {  // '' stringas simbolizuoja pagrindinį puslapį (home)
            return;
        }
        axios.get(serverUrl + 'posts')
            .then(response => {
                console.log('Ateina atsakymas iš serverio į usePosts:');
                dispachPosts({ 
                    type: A.LOAD_ALL_POSTS, 
                    payload: response.data 
                });
            })
            .catch(error => {
                console.error(error);
            })
            console.log('useEffect usePosts [page]');
    }, [page]);


    return { posts, dispachPosts };

}