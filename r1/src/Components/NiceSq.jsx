export default function NiceSq({size}) {
    
    return (
        <div style={{
            width: size + 'px',
            height: size + 'px',
            backgroundColor: 'crimson',
            margin: '20px',
            transition: 'all 0.3s',
        }}>
        </div>
    );
}