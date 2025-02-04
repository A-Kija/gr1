import { useContext } from 'react';
import RouterContext from './Router';

export default function Link({ href, children }) {

    const { page } = useContext(RouterContext);

    return (
        <a href={'/#' + href} className={page === href ? 'active' : null}>
            {children}
        </a>
    );

}