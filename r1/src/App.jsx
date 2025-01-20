import { useEffect, useState } from 'react';
import './crud.scss';
import Create from './Components/crud/Create';


export default function App() {

    console.log('APP RENDER');

    const [storeData, setStoreData] = useState(null);


    useEffect(_ => {
        if (null === storeData) {
            return;
        }


        console.log('APP USE EFFECT storeData');

    }, [storeData]);



    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Create setStoreData={setStoreData} />
                </div>
                <div className="col-8">
                    List
                </div>
            </div>
        </div>
    );
}

