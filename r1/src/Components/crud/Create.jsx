import { STATES } from '../../Constants/crud';

export default function Create() {



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
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3 states-cb">
                                <input type="checkbox" id="create-state-1" />
                                <label className="form-label" htmlFor="create-state-1">{STATES[0]}</label>
                                <input type="checkbox" id="create-state-2" />
                                <label className="form-label" htmlFor="create-state-2">{STATES[1]}</label>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Planet size km</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3 satellites">
                                <label className="form-label">Planet satellites</label>
                                <div className="mb-3">
                                    <div className="mb-3 satellite">
                                        <input type="text" className="form-control" />
                                        <button className='red'>-</button>
                                    </div>
                                    <div className="mb-3 satellite">
                                        <input type="text" className="form-control" />
                                        <button className='red'>-</button>
                                    </div>
                                    <div className="mb-3 satellite">
                                        <input type="text" className="form-control" />
                                        <button className='red'>-</button>
                                    </div>
                                    <button className='green'>+</button>
                                </div>
                            </div>
                            <button className='yellow'>Add planet</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}