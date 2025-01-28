function View({ count, color, size }) {
    return (
        <fieldset className="view" style={{
            border: '1px solid white',
            padding: '30px',
            margin: '30px'
        }}>
            <legend>View</legend>
            <h2 style={{
                color: color ? 'darkgreen' : 'crimson',
                fontSize: size + 'px'
            }}>Counter: {count}</h2>
        </fieldset>
    );
}

export default View;