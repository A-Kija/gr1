export default function AB({children, aOrB}) {

    return (
        <>
        {aOrB ? children[0] : children[1]}
        </>
    );


}