export default function B043({ setSize }) {

    

    const changeSize = diff => {
        if (diff === null) {
            setSize(100);
            return;
        }
        setSize(sz => sz + diff);
    }

    return (

        <div>

            <button className="yellow" onClick={_ => changeSize(10)}>+10</button>
            <button className="yellow" onClick={_ => changeSize(-12)}>-12</button>

        </div>

    );


}