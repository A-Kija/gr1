import { createContext, useEffect, useState } from 'react';
import Wrapper from '../Components/Wrapper';
import Page404 from '../Components/Page404';



const RouterContext = createContext();

export const Router = ({ children }) => {

    const showComponentsList = {
        error404: <Page404 />
    };

    const [page, setPage] = useState(_ => {
        let hash = window.location.hash.replace('#', '');
        hash = hash.split('/').shift();
        console.log('Pradinis STATE page:', hash);
        return hash;
    });
    const [parameters, setParameters] = useState(_ => {
        let hash = window.location.hash.replace('#', '');
        hash = hash.split('/');
        hash.shift();
        console.log('Pradinis STATE parameters:', hash);
        return hash;
    });
    const [showComponent, setShowComponent] = useState(null);

    useEffect(_ => {
        // hash change event JS
        window.addEventListener('hashchange', _ => {
            let hash = window.location.hash.replace('#', '');
            hash = hash.split('/'); // stringas į masyvą
            setPage(hash.shift());
            setParameters(hash);
        });
        console.log('useEffect ROUTER []');
    }, []);

    useEffect(_ => {
        setShowComponent(null);
        console.log('useEffect ROUTER [page, parameters]');
    }, [page, parameters]);



    return (
        <RouterContext.Provider value={{
            page,
            parameters,
            setShowComponent
        }}>
            {showComponent === null ? children : <Wrapper>{showComponentsList[showComponent] ?? null}</Wrapper>}
            {console.log('Renderinamas ROUTER su page:', page)}
        </RouterContext.Provider>
    );
}

export default RouterContext;