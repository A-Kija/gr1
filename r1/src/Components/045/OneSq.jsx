export default function OneSq({ sq, hide, makeWhite }) {

    return (
        <div
            style={{
                backgroundColor: sq.color + '33',
                borderColor: sq.color,
                cursor: 'pointer'
            }}
            className="sq"
            onDoubleClick={_ => hide(sq.id)}
            onClick={_ => makeWhite(sq.id)}
        >
            {sq.number}
        </div>
    );

}