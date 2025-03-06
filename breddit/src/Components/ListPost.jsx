import { useContext, useEffect, useRef, useState } from 'react';
import DataContext from '../Contexts/Data';
import ListComment from './ListComment';
import AuthContext from '../Contexts/Auth';
import * as C from '../Constants/actions';
import useVote from '../Hooks/useVote';

const smiles = [
    { text: ':)', code: '🙂' },
    { text: ':D', code: '😀' },
    { text: ';)', code: '😉' },
    { text: ':/', code: '🫤' }
];


export default function ListPost({ post }) {

    const { comments, getComments, dispachPosts, addNewPostComment } = useContext(DataContext);

    const { user } = useContext(AuthContext);

    const [postCom, setPostCom] = useState('');

    const { setLikes } = useVote(post.id, 'post');

    const vote = useRef(false);

    const commentHandler = e => {
        let com = e.target.value;
        smiles.forEach(s => {
            if (com.includes(s.text)) {
                com = com.replace(s.text, s.code);
            }
        });
        setPostCom(com);
    }

    const addPostComment = _ => {
        console.log('add');
        let com = postCom;
        smiles.forEach(s => {
            if (com.includes(s.code)) {
                com = com.replace(s.code, s.text);
            }
        });
        addNewPostComment(post.id, com, user);
        setPostCom('');
        dispachPosts({
            type: C.ADD_1_COMMENT,
            postId: post.id,
        });
    }

    useEffect(_ => {

        if (!vote.current) {
            return;
        }
        vote.current = false;

        setLikes(post.likes);

        console.log('pakito', post.id);

    }, [post]);

    const upVote = _ => {
        vote.current = true;
        const ao = {
            type: C.UPVOTE_POST,
            postId: post.id,
            user
        };
        dispachPosts(ao);
    };
    const downVote = _ => {
        vote.current = true;
        const ao = {
            type: C.DOWNVOTE_POST,
            postId: post.id,
            user
        };
        dispachPosts(ao);
    };

    return (
        <div className="post">
            <div className="post-top">
                <span className="author"><img src={post.avatar} alt="avatar" style={{ width: '30px' }} /></span>
                <span className="date">{new Date(post.date).toLocaleDateString('lt-LT')}</span>
            </div>
            <h2>{post.title}</h2>
            <div className="post-image">
                <img src={post.image_url} alt={post.title} />
            </div>
            <p>{post.content}</p>
            <div className="post-bottom">
                <span className="likes">
                    <i className="up" onClick={upVote}>⇧</i>
                    {post.likes.l.length - post.likes.d.length}
                    <i className="down" onClick={downVote}>⇩</i>
                </span>
                <span className="comment" onClick={_ => getComments(post.id, 'post')}>Show all comments: {post.comments}</span>
            </div>
            <div className="post-comments">


                {
                    comments
                        .filter(comment => comment.postId === post.id && comment.comId === null)
                        .map(comment => <ListComment key={comment.id} comment={comment} />)
                }

                {
                    user.role !== 'guest' &&

                    <div className="write-comment">
                        <div>Write comment</div>
                        <textarea onChange={commentHandler} value={postCom} />
                        <button className="blue" onClick={addPostComment}>send</button>
                    </div>

                }

            </div>
        </div>
    );

}