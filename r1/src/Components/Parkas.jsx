export default function Parkas({ koks }) {

    if (koks === 1) {
        return (
            <h1>Didelis parkas</h1>
        );
    }

    if (koks === 2) {
        return (
            <>
                <div>Parkelis</div>
                <div>Parkelis</div>
                <div>Parkelis</div>
            </>
        );
    }

    if (koks === 3) {
        return (
            <ul>
                <li>Parkutis</li>
                <li>Parkutis</li>
                <li>Parkutis</li>
            </ul>
        );
    }

    return null;

}