import { useState } from 'react';
import { STATES } from '../../Constants/crud';

const defaultPlanetData = { 'name': '', 'state': -1, 'size': 0 };
const defaultSatellites = [''];

export default function Create({ setStoreData }) {

    const [satellites, setSatellites] = useState(defaultSatellites);
    const [planetData, setPlanetData] = useState(defaultPlanetData);

    const addSatellite = _ => {
        setSatellites(s => [...s, '']);
    }

    const removeSatellite = index => {
        setSatellites(s => s.filter((_, i) => i !== index));
    }

    const changeSatellite = (value, index) => {
        setSatellites(s => s.map((satellite, i) => i === index ? value : satellite));
    }

    const submitData = _ => {
        const data = { 
            satellites,
            name: planetData.name,
            state: planetData.state,
            size: parseFloat(planetData.size)
         };
        setStoreData(data);
        setSatellites(defaultSatellites);
        setPlanetData(defaultPlanetData);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">

                    <div className="card mt-5">
                        <div className="card-header">
                            <h2>Add new planet</h2>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Here you can add a newly discovered planet.</p>

                            <div className="mb-3">
                                <label className="form-label">Planet name</label>
                                <input type="text" className="form-control"
                                    value={planetData.name}
                                    onChange={e => setPlanetData(p => ({ ...p, name: e.target.value }))}
                                />
                            </div>
                            <div className="mb-3 states-cb">
                                <input type="checkbox" id="create-state-0"
                                    checked={planetData.state === 0}
                                    onChange={_ => setPlanetData(p => ({ ...p, state: 0 }))}
                                />
                                <label className="form-label" htmlFor="create-state-0">{STATES[0]}</label>
                                <input type="checkbox" id="create-state-1"
                                    checked={planetData.state === 1}
                                    onChange={_ => setPlanetData(p => ({ ...p, state: 1 }))}
                                />
                                <label className="form-label" htmlFor="create-state-1">{STATES[1]}</label>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Planet size km</label>
                                <input type="text" className="form-control"
                                    value={planetData.size}
                                    onChange={e => setPlanetData(p => ({ ...p, size: e.target.value }))}
                                />
                            </div>
                            <div className="mb-3 satellites">
                                <label className="form-label">Planet satellites</label>
                                {
                                    satellites.map((satellite, index) =>
                                        <div className="mb-1" key={index}>
                                            <div className="satellite">
                                                <input type="text" className="form-control"
                                                    value={satellite}
                                                    onChange={e => changeSatellite(e.target.value, index)} />
                                                <button className='red' onClick={_ => removeSatellite(index)}>-</button>
                                            </div>
                                        </div>
                                    )
                                }
                                <div className="mb-3">
                                    <button className="green" onClick={addSatellite}>+</button>
                                </div>
                            </div>
                            <button className="yellow" onClick={submitData}>Add planet</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}