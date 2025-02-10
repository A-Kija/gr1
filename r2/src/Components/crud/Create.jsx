export default function Create() {


    return (
        <div className="card mt-5">
            <div className="card-header">
                New Image
            </div>
            <div className="card-body">
                <div class="mb-3">
                    <input class="form-control" type="file" />
                </div>
                <button type="button" className="yellow mt-5">Add image</button>
            </div>
        </div>
    )

}