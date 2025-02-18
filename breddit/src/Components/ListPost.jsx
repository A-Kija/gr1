export default function ListPost({post}) {

    return (
        <div className="post">
            <div className="post-top">
                <span className="author">{post.avatar}</span>
                <span className="date">{new Date(post.date).toLocaleDateString('lt-LT')}</span>
            </div>
            <h2>{post.title}</h2>
            <div className="post-image">
                <img src={post.image_url} alt={post.title} />
            </div>
            <p>{post.content}</p>
            <div className="post-bottom">
                <span className="likes">
                    <i className="up"></i>
                        {post.likes.l.length - post.likes.d.length}
                    <i className="down"></i>
                </span>
                <span className="comment">Comment</span>
            </div>
        </div>
    );

}