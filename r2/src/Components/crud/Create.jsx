import { useContext, useRef } from 'react';
import useImage from './useImage';
import DataContext from './Data';

export default function Create() {

    const fileInput = useRef(null);
    const { image, readImage, clearImage } = useImage(fileInput);
    const { setCreateData } = useContext(DataContext);

    const submit = _ => {
        setCreateData({ image });
        clearImage();
    }

    return (
        <div className="card mt-5">
            <div className="card-header">
                <h2>New Image</h2>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <input ref={fileInput} className="form-control" type="file" onChange={readImage} />
                </div>
                {
                    image
                        ? (
                            <div className="mb-3">
                                <img src={image} alt="add-image" className="img-fluid" />
                            </div>)
                        : <span>No image</span>
                }
                <div>
                    <button type="button" className="yellow mt-5" disabled={!image} onClick={submit}>Add image</button>
                    <button type="button" className="red mt-5" disabled={!image} onClick={clearImage}>Clear image</button>
                </div>
            </div>
        </div>
    )

}