export default function Link({ to, children }) {

    return (
        <a href={'#' + to}>{children}</a>
    );

}