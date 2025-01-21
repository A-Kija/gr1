import './crud.scss';
import { v4 as uuidv4 } from 'uuid';

import { useEffect, useState } from 'react';
import axios from 'axios';

import { URL } from './Constants/crud';

import Create from './Components/crud/Create';
import List from './Components/crud/List';
import Edit from './Components/crud/Edit';


export default function App() {

    console.log('APP RENDER');



    const [data, setData] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [storeData, setStoreData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [updateData, setUpdateData] = useState(null);


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
        const id = uuidv4();
        setData(d => [{ id, ...storeData, temp: true }, ...d]);

        axios.post(URL, storeData)
            .then(response => {
                console.log(response);
                setData(d => d.map(planet => {
                    if (planet.id === id) {
                        delete planet.temp;
                        return { id: response.data.id, ...storeData };
                    }
                    return planet;
                }));

            })
            .catch(_ => {

                setData(d => {
                    const oldCreateData = d.find(planet => planet.id === id);
                    setCreateData(oldCreateData);
                    
                    return d.filter(planet => planet.id !== id);
                });
            });



        console.log('APP USE EFFECT storeData');

    }, [storeData]);



    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Create setStoreData={setStoreData} createData={createData} />
                </div>
                <div className="col-8">
                    <List data={data} />
                </div>
            </div>
        </div>
        {
            editData !== null && <Edit />
        }
        </>
    );
}

