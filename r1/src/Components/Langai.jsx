export default function Langai({kiekis, rand}) {

    return (
        <h3>Langai: {kiekis}, kaminai: {rand(1, 5)}</h3>
    );


}