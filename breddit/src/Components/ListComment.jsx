import { useContext, useEffect, useState, useRef } from 'react';
import DataContext from '../Contexts/Data';
import AuthContext from '../Contexts/Auth';
import useVote from '../Hooks/useVote';


const smiles = [
    { text: ':)', code: '🙂' },
    { text: ':D', code: '😀' },
    { text: ';)', code: '😉' },
    { text: ':/', code: '🫤' }
];

export default function ListComment({ comment }) {

    const { comments, getComments, upVoteComment, downVoteComment, addNewCommentComment } = useContext(DataContext);

    const { user } = useContext(AuthContext);

    const [showReply, setShowReply] = useState(false);
    const [commentsComent, setCommentsComent] = useState('');

    const { setLikes } = useVote(comment.id, 'com');

    const vote = useRef(false);

    const isDynamicId = parseInt(comment.id) !== comment.id;


    const commentHandler = e => {
        let com = e.target.value;
        smiles.forEach(s => {
            if (com.includes(s.text)) {
                com = com.replace(s.text, s.code);
            }
        });
        setCommentsComent(com);
        
    }

    const parseComment = com => {
        smiles.forEach(s => {
            if (com.includes(s.text)) {
                com = com.replace(s.text, s.code);
            }
        });
        // return com;
        return com.split('\n').map((line, i) => <p key={i}>{line}</p>)
    }

    const upVote = _ => {
        vote.current = true;
        upVoteComment(comment.id, user);
    }

    const downVote = _ => {
        vote.current = true;
        downVoteComment(comment.id, user);
    }

    const addComment = _ => {
        addNewCommentComment(comment.id, commentsComent, user);
        setCommentsComent('');
        setShowReply(false);
    }

    useEffect(_ => {

        if (!vote.current) {
            return;
        }
        vote.current = false;

        setLikes(comment.likes);

    }, [comment]);

    return (
        <div className="comment">
            <h3>{comment.author}</h3>
            {
                parseComment(comment.body)
            }
            <div className="comment-bottom">
                <span className="likes">
                    <i className="up" onClick={upVote}>⇧</i>
                    {comment.likes.l.length - comment.likes.d.length}
                    <i className="down" onClick={downVote}>⇩</i>
                </span>
                <span className="comment" onClick={_ => getComments(comment.id, 'comment')}>Show comments</span>
                {
                    !isDynamicId && <span className="comment" onClick={_ => setShowReply(r => !r)}>{showReply ? 'Hide reply' : 'Reply'}</span>
                }
            </div>

            {

                showReply &&

                <div className="write-comment">
                    <div>Write comment</div>
                    <textarea value={commentsComent} onChange={commentHandler} />
                    <button className="blue" onClick={addComment}>send</button>
                </div>

            }

            <div className="more-comments">
                {
                    comments
                        .filter(c => c.comId === comment.id)
                        .map(com => <ListComment key={com.id} comment={com} />)
                }
            </div>
        </div>
    );
}