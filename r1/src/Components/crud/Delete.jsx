export default function Delete({ setDeleteData, deleteData, setDestroyData }) {



    const submitData = _ => {
        setDestroyData(deleteData);
        setDeleteData(null);
    }


    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Confirm planet destroy</h2>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to destroy this planet?</p>
                        <p>This action cannot be undone.</p>
                        <p>Planet: <strong>{deleteData.name}</strong></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={_ => setDeleteData(null)}>Cancel</button>
                        <button type="button" className="red" onClick={submitData}>Destroy</button>
                    </div>
                </div>
            </div>
        </div>
    );

}