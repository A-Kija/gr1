export default function Messages({ messages, closeMessage }) {
    return (
        <div className="msg-bin">
            {messages.map(message => (
                <div key={message.id} className={`alert alert-${message.type} alert-dismissible`} role="alert">
                    <strong>{message.title}</strong> {message.text}
                    <button type="button" className="btn-close" aria-label="Close" onClick={_ => closeMessage(message.id)}></button>
                </div>
            ))}
        </div>
    );
}