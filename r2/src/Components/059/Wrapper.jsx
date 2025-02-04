export default function Wrapper({ children }) {
    return (
        <div className="app">
            <header className="app-header">
                {children}
            </header>
        </div>
    );
}