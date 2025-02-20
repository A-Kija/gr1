export default function Wrapper({ children }) {
    return (
        <div className="app">
            {children}
            {console.log('Renderinamas WRAPPER su children MAIN')}
        </div>
    );
}