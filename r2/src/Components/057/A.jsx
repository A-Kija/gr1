import B from './B';

export default function A({count}) {
    return (
        <div className="drill-bin">
            <h2>Component A</h2>
            <B count={count} />
        </div>
    );

}