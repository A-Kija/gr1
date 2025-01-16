import './buttons.scss';
import './crud.scss';
import Create from './Components/crud/Create';


export default function App() {

    console.log('APP RENDER');



    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Create />
                </div>
                <div className="col-8">
                    List
                </div>
            </div>
        </div>
    );
}

