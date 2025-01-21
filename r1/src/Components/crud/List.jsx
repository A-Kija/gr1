import ListPlanet from './ListPlanet';

export default function List({ data }) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">

                    <div className="card mt-5">
                        <div className="card-header">
                            <h2>Planets list</h2>
                        </div>
                        <div className="card-body">

                            <ul className="list-group list-group-flush">
                                {
                                    data !== null 
                                    ?
                                    data.map(planet => <ListPlanet key={planet.id} planet={planet} />)
                                    :
                                    <li className="list-group-item">
                                        <h3>Planets are loading...</h3>
                                    </li>
                                }
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}