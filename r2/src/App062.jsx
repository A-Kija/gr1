import './app.css';
import './buttons.scss';
import { useRef, useState } from 'react';
import useCount from './Components/062/useCount';
import useColorSquare from './Components/062/useColorSquare';
import useImage from './Components/useImage';

function App() {

    const fileInput = useRef(null);
    
    const { image, readImage, clearImage } = useImage(fileInput);

    

    const [count2, c2] = useCount(0);

    const [count1, setCount1] = useState(0);

    const { color1, click1, color2, click2 } = useColorSquare('#2597AD', '#F2C57C');

    const c1 = _ => {
        setCount1(c => c < 5 ? c + 1 : 0);
    }

    return (
        <div className="app">
            <header className="app-header">
                <h1>Count1: {count1}</h1>
                <button className="yellow" onClick={c1}>count 1</button>
                <h1>Count2: {count2}</h1>
                <button className="green" onClick={c2}>count 2</button>
                <div className="sq-bin">
                    <div className="sq" onClick={click1} style={{
                        cursor: 'pointer',
                        backgroundColor: color1 + '80',
                        borderColor: color1,
                    }}></div>
                    <div className="sq" onClick={click2} style={{
                        cursor: 'pointer',
                        backgroundColor: color2 + '80',
                        borderColor: color2,
                    }}></div>
                </div>

                {
                    image ? <img src={image} alt="img" className="small-image" /> : null
                }


                <input ref={fileInput} type="file" onChange={readImage} />

                <button onClick={clearImage}>Clear Image</button>
            </header>
        </div>
    );
}

export default App;
