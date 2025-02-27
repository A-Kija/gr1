import { useEffect, useState } from 'react';
import { serverUrl } from '../Constants/main';
import axios from 'axios';

export default function useVote(postId) {

    const [likes, setLikes] = useState(null);


    useEffect(_ => {
        if (null === likes) {
            return;
        }

        axios.patch(serverUrl + postId + '/update-votes', likes, { withCredentials: true })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error)
            });

    }, [likes]);

    return { setLikes }
}