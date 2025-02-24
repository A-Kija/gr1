import { useContext } from 'react';
import DataContext from '../Contexts/Data';
import ListComment from './ListComment';

export default function ListPost({post}) {

    const {comments, getComments} = useContext(DataContext);

    return (
        <div className="post">
            <div className="post-top">
                <span className="author"><img src={post.avatar} alt="avatar" style={{width: '30px'}} /></span>
                <span className="date">{new Date(post.date).toLocaleDateString('lt-LT')}</span>
            </div>
            <h2>{post.title}</h2>
            <div className="post-image">
                <img src={post.image_url} alt={post.title} />
            </div>
            <p>{post.content}</p>
            <div className="post-bottom">
                <span className="likes">
                    <i className="up">⇧</i>
                        {post.likes.l.length - post.likes.d.length}
                    <i className="down">⇩</i>
                </span>
                <span className="comment" onClick={_ => getComments(post.id, 'post')}>Comments: {post.comments}</span>
            </div>
            <div className="post-comments">
                <h3>Comments</h3>
                
                    {
                        comments
                        .filter(comment => comment.postId === post.id && comment.comId === null)
                        .map(comment => <ListComment key={comment.id} comment={comment} />)
                    }

            </div>
        </div>
    );

}