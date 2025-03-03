import { useState } from 'react';
import { serverUrl } from '../Constants/main';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function useComments() {

    const [comments, setComments] = useState([]);
    /* 
    [
        {id: 1, postId: 1, comId: null, body: 'comment body', author: 'author name', likes:{l:[],d:[]}},
        {id: 2, postId: 1, comId: 2, body: 'comment body', author: 'author name', likes:{l:[],d:[]}},
        {id: 3, postId: 1, comId: 3, body: 'comment body', author: 'author name', likes:{l:[],d:[]}},
    ];
    */

    const addNewPostComment = async (postId, commentText, user) => {
        setComments(c => [...c, {
            id: uuidv4(),
            postId,
            comId: null,
            body: commentText,
            author: user.name,
            likes:{l:[],d:[]}
        }]);
        try {
            await axios.post(serverUrl + 'create-comment/' + postId + '/post', {
                author_id: user.id,
                content: commentText
            });

        }catch (error) {
            console.error(error);
        }
    }


    const getComments = async (id, type) => {
        try {
            const response = await axios.get(serverUrl + 'comments/' + id + '/' + type);
            console.log('Ateina atsakymas iš serverio į useComments:', response.data);
            setComments(comments => {
                const c = structuredClone(comments);
                response.data.forEach(res => {
                   const copy = c.find(c => c.id === res.id);
                   if (copy) {
                       copy.body = res.body;
                   } else {
                       c.push(res);
                   }
                });
                return c;
            });
        } catch (error) {
            console.error(error);
        }
    }
      
    return { comments, getComments, addNewPostComment };
}