import { useEffect, useState } from 'react';
import { STATES } from '../../Constants/crud';

const defaultPlanetData = { 'name': '', 'state': -1, 'size': 0 };
const defaultSatellites = [''];

export default function Edit({ setEditData, editData, setUpdateData }) {

    const [satellites, setSatellites] = useState(defaultSatellites);
    const [planetData, setPlanetData] = useState(defaultPlanetData);

    useEffect(_ => {
        if (null === editData) {
            return;
        }
        setSatellites(editData.satellites);
        setPlanetData({
            name: editData.name,
            state: editData.state,
            size: editData.size
        });

    }, [editData]);

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
            size: isNaN(parseFloat(planetData.size)) ? 0 : parseFloat(planetData.size),
            id: editData.id
        };
        setUpdateData(data);
        setEditData(null);
        setSatellites(defaultSatellites);
        setPlanetData(defaultPlanetData);
    }


    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Edit planet</h2>
                        <button type="button" className="btn-close" aria-label="Close" onClick={_ => setEditData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="card-body">
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
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={_ => setEditData(null)}>Close</button>
                        <button type="button" className="blue" onClick={submitData}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );

}