import { createContext, useEffect, useState } from 'react';


const RouterContext = createContext();

export const Router = ({ children }) => {

    const [page, setPage] = useState(_ => {
        let hash = window.location.hash.replace('#', '');
        hash = hash.split('/').shift();
        return hash;
    });
    const [parameters, setParameters] = useState(_ => {
        let hash = window.location.hash.replace('#', '');
        hash = hash.split('/');
        hash.shift();
        return hash;
    });

    useEffect(_ => {
        // hash change event JS
        window.addEventListener('hashchange', _ => {
            let hash = window.location.hash.replace('#', '');
            hash = hash.split('/'); // stringas į masyvą
            setPage(hash.shift());
            setParameters(hash);
        });
    }, []);

    useEffect(_ => {

        console.log('page', page);

    }, [page]);

    useEffect(_ => {

        console.log('parameters', parameters);

    }, [parameters]);

    return (
        <RouterContext.Provider value={{
            page,
            parameters
        }}>
            {children}
        </RouterContext.Provider>
    );
}

export default RouterContext;