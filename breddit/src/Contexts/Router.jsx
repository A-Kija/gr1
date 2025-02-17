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
        return hash;
    });
    const [parameters, setParameters] = useState(_ => {
        let hash = window.location.hash.replace('#', '');
        hash = hash.split('/');
        hash.shift();
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
    }, []);

    useEffect(_ => {
        setShowComponent(null);
    }, [page, parameters]);



    return (
        <RouterContext.Provider value={{
            page,
            parameters,
            setShowComponent
        }}>
            {showComponent === null ? children : <Wrapper>{showComponentsList[showComponent] ?? null}</Wrapper>}
        </RouterContext.Provider>
    );
}

export default RouterContext;