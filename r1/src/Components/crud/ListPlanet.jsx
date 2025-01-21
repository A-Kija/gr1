import { STATES } from '../../Constants/crud';


export default function ListPlanet({ planet }) {

    return (
        <li className="list-group-item" style={{ backgroundColor: planet?.temp ? '#eeeeee' : '#ffffff'}}>
            <div className="planet-in-list">
                <div className="planet-in-list__info">
                    <h3>{planet.name}</h3>
                    <i>State: {STATES[planet.state]}</i>
                    <p>Size: {planet.size} km</p>
                    <p>Satellites: {planet.satellites.join(', ')}</p>
                </div>
                <div className="planet-in-list__buttons">
                    <button disabled={planet?.temp} className="yellow">Edit</button>
                    <button disabled={planet?.temp} className="red">Delete</button>
                </div>
            </div>
        </li>
    );

}