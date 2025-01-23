import './crud.scss';
import { v4 as uuidv4 } from 'uuid';

import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { URL } from './Constants/crud';

import Create from './Components/crud/Create';
import List from './Components/crud/List';
import Edit from './Components/crud/Edit';
import Delete from './Components/crud/Delete';
import Messages from './Components/crud/Messages';


export default function App() {


    const [data, setData] = useState(null);
    const [createData, setCreateData] = useState(null);
    const [storeData, setStoreData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [updateData, setUpdateData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [destroyData, setDestroyData] = useState(null);

    const [messages, setMessages] = useState([]);

    const addMessage = useCallback((message, oldId = 0) => {
        const id = oldId ? oldId : uuidv4();
        if (oldId) {
            setMessages(m => m.map(msg => msg.id === oldId ? { id, ...message } : msg));
        } else {
            setMessages(m => [{ id, ...message }, ...m]);
        }
        setTimeout(_ => {
            setMessages(m => m.filter(msg => msg.id !== id));
        }, 15000);
        return id;
    }, [setMessages]);

    const closeMessage = id => {
        setMessages(m => m.filter(msg => msg.id !== id));
    }


    useEffect(_ => {
        axios.get(URL)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                if (error.response) {
                    addMessage(error.response.data.msg);
                } else {
                    addMessage({
                        type: 'danger',
                        title: error.code,
                        text: error.message
                    });
                }
            });
    }, []);


    useEffect(_ => {
        if (null === storeData) {
            return;
        }
        const id = uuidv4();
        setData(d => [{ id, ...storeData, temp: true }, ...d]);
        const msgId = addMessage({
            type: 'info',
            title: 'Saving...',
            text: 'Please wait'
        });
        axios.post(URL, storeData)
            .then(response => {
                addMessage(response.data.msg, msgId);
                setData(d => d.map(planet => {
                    if (planet.id === id) {
                        delete planet.temp;
                        return { id: response.data.id, ...storeData };
                    }
                    return planet;
                }));
            })
            .catch(error => {
                if (error.response) {
                    addMessage(error.response.data.msg, msgId);
                } else {
                    addMessage({
                        type: 'danger',
                        title: error.code,
                        text: error.message
                    }, msgId);
                }
                setData(d => {
                    const oldCreateData = d.find(planet => planet.id === id);
                    setCreateData(oldCreateData);

                    return d.filter(planet => planet.id !== id);
                });
            });
    }, [storeData, setData, setCreateData, addMessage]);


    useEffect(_ => {
        if (null === updateData) {
            return;
        }
        setData(d => d.map(planet => {
            if (planet.id === updateData.id) {
                return { ...updateData, temp: true, oldData: { ...planet } };
            }
            return planet;
        }));
        const msgId = addMessage({
            type: 'info',
            title: 'Updating...',
            text: 'Please wait'
        });

        axios.put(URL + '/' + updateData.id, updateData)
            .then(response => {
                addMessage(response.data.msg, msgId);
                setData(d => d.map(planet => {
                    if (planet.id === updateData.id) {
                        delete planet.temp;
                        delete planet.oldData;
                    }
                    return planet;
                }));
            })
            .catch(error => {
                if (error.response) {
                    addMessage(error.response.data.msg, msgId);
                } else {
                    addMessage({
                        type: 'danger',
                        title: error.code,
                        text: error.message
                    }, msgId);
                }
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

        const msgId = addMessage({
            type: 'info',
            title: 'Deleting...',
            text: 'Please wait'
        });

        axios.delete(URL + '/' + destroyData.id)
            .then(response => {
                addMessage(response.data.msg, msgId);
                setData(d => d.filter(planet => planet.id !== destroyData.id));
            })
            .catch(error => {
                if (error.response) {
                    addMessage(error.response.data.msg, msgId);
                } else {
                    addMessage({
                        type: 'danger',
                        title: error.code,
                        text: error.message
                    }, msgId);
                }
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
                        <Create setStoreData={setStoreData} createData={createData} addMessage={addMessage} />
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
            {
                messages.length > 0 && <Messages messages={messages} closeMessage={closeMessage} />
            }
        </>
    );
}

