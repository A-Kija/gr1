import './image-crud.scss';
import './buttons.scss';
import Create from './Components/crud/Create';


function App() {


    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-4">
                    <Create />
                </div>
                <div className="col-8">
                    listas
                </div>
            </div>
        </div>
    );
}

export default App;
