import { useContext } from 'react';
import DataContext from '../Contexts/Data';
import ListPost from '../Components/ListPost';

export default function Home() {

    const { posts } = useContext(DataContext);

    console.log('Perkraunamas Home.jsx:', posts);

    return (
        <section className="home">
            <div className="container">
                {   posts !== null 
                    ?
                    posts.map(post => <ListPost key={post.id} post={post} />)
                    :
                    <h2>loading...</h2>
                }
            </div>
            { console.log('Home.jsx rodo:', posts === null ? 'loading...' : posts) }
        </section>
    );
}