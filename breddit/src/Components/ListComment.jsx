import { useContext } from 'react';
import DataContext from '../Contexts/Data';
import AuthContext from '../Contexts/Auth';

export default function ListComment({ comment }) {

    const {comments, getComments, upVoteComment, downVoteComment} = useContext(DataContext);

    const { user } = useContext(AuthContext);

    const upVote = _ => {
        upVoteComment(comment.id, user);
    }

    const downVote = _ => {
        downVoteComment(comment.id, user);
    }

    return (
        <div className="comment">
            <h3>{comment.author}</h3>
            {
                comment.body.split('\n').map((line, i) => <p key={i}>{line}</p>)
            }
            <div className="comment-bottom">
                <span className="likes">
                    <i className="up" onClick={upVote}>⇧</i>
                    {comment.likes.l.length - comment.likes.d.length}
                    <i className="down" onClick={downVote}>⇩</i>
                </span>
                <span className="comment" onClick={_=> getComments(comment.id, 'comment')}>Show comments</span>
                <span className="comment">Reply</span>
            </div>
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