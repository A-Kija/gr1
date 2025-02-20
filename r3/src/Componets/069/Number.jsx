import SimpleContext from './SimpleContext';

export default function Number() {

    return (
        <div>
            <h1>Number:
                <SimpleContext.Consumer>
                    {v => <span style={{color:v.color}}> {v.number}</span>}
                </SimpleContext.Consumer>
            </h1>
        </div>
    );
}