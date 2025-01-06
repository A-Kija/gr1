import Langai from './Langai';

export default function Namas({ numeris, spalva, kiekis, atsFun }) {

    // const { numeris, spalva } = props;

    return (
        <>
            <h2 style={{
                color: spalva,
            }}
            >Namas {numeris} aukštas</h2>
            <Langai kiekis={kiekis} rand={atsFun}/>
        </>
    );

}