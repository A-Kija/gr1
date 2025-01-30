import C from './C';

export default function B({count}) {
    return (
        <div className="drill-bin">
            <h2>Component B</h2>
            <C count={count} />
        </div>
    );

}