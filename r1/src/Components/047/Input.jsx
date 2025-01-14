export default function Input({ input, setInput,cb, setCb }) {

    return (
        <div className="input">
            <input type={cb ? 'password' : 'text'} value={input} onChange={e => setInput(e.target.value)} />
            <input type="checkbox" checked={cb} onChange={_ => setCb(c => !c)} />
        </div>
    );
}

