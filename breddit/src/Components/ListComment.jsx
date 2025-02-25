import { useContext } from 'react';
import DataContext from '../Contexts/Data';

export default function ListComment({ comment }) {

    const {comments, getComments} = useContext(DataContext);

    return (
        <div className="comment">
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <div className="comment-bottom">
                <span className="likes">
                    <i className="up">⇧</i>
                    {comment.likes.l.length - comment.likes.d.length}
                    <i className="down">⇩</i>
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