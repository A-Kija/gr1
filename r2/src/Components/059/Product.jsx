import { useContext } from 'react';
import RouterContext from './Router';


export default function Product() {

    const [color, id] = useContext(RouterContext).parameters;
    const { setShowComponent } = useContext(RouterContext);

    const validColors = ['green', 'blue', 'yellow'];

    if (!validColors.includes(color)) {
        setShowComponent('error404');
        return null;
    }

    return (
        <div className="contacts">
            <h1 style={{ color }}>Product</h1>
            <p>Product ID: {id}</p>
        </div>
    );
}