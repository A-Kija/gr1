import { createContext } from 'react';
import useCreate from './useCreate';

const DataContext = createContext();

const url = 'http://localhost:3333/api/images';


export const DataProvider = ({ children }) => {

    const { setCreateData } = useCreate(url);


    return (
        <DataContext.Provider value={{
            setCreateData
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;