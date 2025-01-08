import './app.css';
import './buttons.scss';
import Checkbox from './Components/044/Checkbox';
import Mygtukai from './Components/044/Mygtukai';
import Radio from './Components/044/Radio';
import Select from './Components/044/Select';
import Text from './Components/044/Text';

function App() {
  return (
    <div className="app">
      <header className="app-header">

        <Mygtukai />

        <Text />

        <Select />

        <Checkbox />

        <Radio />

      </header>
    </div>
  );
}

export default App;