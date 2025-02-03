import { useContext } from 'react';
import RouterContext from './Router';


export default function Product() {

    const [color, id] = useContext(RouterContext).parameters;


    return (
        <div className="contacts">
            <h1 style={{color}}>Product</h1>
            <p>Product ID: {id}</p>
        </div>
    );
}