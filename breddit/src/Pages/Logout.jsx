import useLogout from '../Hooks/useLogout';

export default function Logout() {

    useLogout();

    return (
        <h2 className="screen-message">Logging out...</h2>
    );
}