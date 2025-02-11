import { createContext } from 'react';
import useCreate from './useCreate';
import useGet from './useGet';
import useReload from './useReload';

const DataContext = createContext();

const url = 'http://localhost:3333/api/images';


export const DataProvider = ({ children }) => {

    const { reload, reloadTime } = useReload();

    const { setCreateData } = useCreate(url, reload);
    const { images } = useGet(url, reloadTime);


    return (
        <DataContext.Provider value={{
            setCreateData,
            images
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;