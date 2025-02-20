import { createContext, useContext } from 'react';
import usePosts from '../Hooks/usePosts';
import RouterContext from './Router';

const DataContext = createContext();

export const Data = ({ children }) => {

    // duomenų gavimas ir Routerio konteksto. (duomenys tarp kontekstų)
    const { page, parameters } = useContext(RouterContext);
  
    
    const { posts } = usePosts(page);

    console.log('Perkraunamas Data.jsx:', page, posts);
    
    
    return (
        <DataContext.Provider value={{
            posts
        }}>
            {children}
            {console.log('Renderinamas DATA su posts:', posts)}
        </DataContext.Provider>
    );
}

export default DataContext;