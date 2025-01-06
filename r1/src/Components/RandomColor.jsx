export default function RandomColor({ct}) {

    const randomColor = _ => {
        return '#' + Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0');
    }

    return (
        <span style={{color: randomColor()}}>
            {ct ? ct : 'Random color'}
        </span>
    );

}