import './crud.scss';

import { use, useEffect, useState } from 'react';
import axios from 'axios';

import { URL } from './Constants/crud';

import Create from './Components/crud/Create';
import List from './Components/crud/List';


export default function App() {

    console.log('APP RENDER');

    const [data, setData] = useState(null);
    const [storeData, setStoreData] = useState(null);


    useEffect(_ => {
        axios.get(URL)
        .then(response => {
            console.log(response.data);
            setData(response.data);
        })
        .catch(error => {
            console.error(error);
        });


    }, []);


    useEffect(_ => {
        if (null === storeData) {
            return;
        }

        axios.post(URL, storeData)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });


        console.log('APP USE EFFECT storeData');

    }, [storeData]);



    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Create setStoreData={setStoreData} />
                </div>
                <div className="col-8">
                    <List data={data} />
                </div>
            </div>
        </div>
    );
}

