import './image-crud.scss';
import './buttons.scss';
import Create from './Components/crud/Create';
import { DataProvider } from './Components/crud/Data';
import List from './Components/crud/List';


function App() {


    return (
        <DataProvider>
            <div className="container text-center">
                <div className="row">
                    <div className="col-4">
                        <Create />
                    </div>
                    <div className="col-8">
                        <List />
                    </div>
                </div>
            </div>
        </DataProvider>
    );
}

export default App;
