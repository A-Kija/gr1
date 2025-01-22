import './crud.scss';
import { v4 as uuidv4 } from 'uuid';

import { useEffect, useState } from 'react';
import axios from 'axios';

import { URL } from './Constants/crud';

import Create from './Components/crud/Create';
import List from './Components/crud/List';
import Edit from './Components/crud/Edit';
import Delete from './Components/crud/Delete';


export default function App() {

    console.log('APP RENDER');



    const [data, setData] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [storeData, setStoreData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [updateData, setUpdateData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [destroyData, setDestroyData] = useState(null);


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


    useEffect(_ => {
        if (null === updateData) {
            return;
        }
        setData(d => d.map(planet => {
            if (planet.id === updateData.id) {
                return { ...updateData, temp: true, oldData: {...planet} };
            }
            return planet;
        }));

        axios.put(URL + '/' + updateData.id, updateData)
            .then(_ => {
                setData(d => d.map(planet => {
                    if (planet.id === updateData.id) {
                        delete planet.temp;
                        delete planet.oldData;
                    }
                    return planet;
                }));
            })
            .catch(_ => {
                setData(d => d.map(planet => {
                    if (planet.id === updateData.id) {
                        return planet.oldData;
                    }
                    return planet;
                }));
                setEditData(updateData);
            });


    }, [updateData]);

    useEffect(_ => {
        if (null === destroyData) {
            return;
        }
        setData(d => d.map(planet => {
            if (planet.id === destroyData.id) {
                return { ...planet, temp: true, destroy: true };
            }
            return planet;
        }));

        axios.delete(URL + '/' + destroyData.id)
            .then(_ => {
                setData(d => d.filter(planet => planet.id !== destroyData.id));
            })
            .catch(_ => {
                setData(d => d.map(planet => {
                    if (planet.id === destroyData.id) {
                        delete planet.temp;
                        delete planet.destroy;
                    }
                    return planet;
                }));
            });
    }, [destroyData]);



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create setStoreData={setStoreData} createData={createData} />
                    </div>
                    <div className="col-8">
                        <List data={data} setEditData={setEditData} setDeleteData={setDeleteData} />
                    </div>
                </div>
            </div>
            {
                editData !== null && <Edit setEditData={setEditData} editData={editData} setUpdateData={setUpdateData} />
            }
            {
                deleteData !== null && <Delete setDeleteData={setDeleteData} deleteData={deleteData} setDestroyData={setDestroyData} />
            }
        </>
    );
}

