import { createContext, useContext } from 'react';
import usePosts from '../Hooks/usePosts';
import RouterContext from './Router';

const DataContext = createContext();

export const Data = ({ children }) => {

    const { page, parameters } = useContext(RouterContext);
    
    const { posts } = usePosts(page);
    
    
    return (
        <DataContext.Provider value={{
            posts
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;