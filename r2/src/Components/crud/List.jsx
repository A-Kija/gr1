import { useContext } from 'react';
import DataContext from './Data';

export default function List() {

    const { images } = useContext(DataContext);

    return (
        <div className="card mt-5">
            <div className="card-header">
                <h2>Images</h2>
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {
                        null !== images 
                        ? images.map(image => (
                            <li key={image.id} className="list-group-item">
                                <div className="m-1">
                                    <img src={image.url} alt="add-image" className="img-fluid" />
                                </div>
                            </li>
                        ))
                        : <span>Loading...</span>
                    }
                </ul>
            </div>
        </div>
    );
}