export default function Input({ input, setInput }) {

    return (
        <div className="input">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        </div>
    );
}