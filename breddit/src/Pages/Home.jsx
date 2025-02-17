import { useContext } from 'react';
import DataContext from '../Contexts/Data';

export default function Home() {

    const { posts } = useContext(DataContext);

    return (
        <section className="home">
            <div className="container">
                <h1>postai</h1>
            </div>
        </section>
    );
}