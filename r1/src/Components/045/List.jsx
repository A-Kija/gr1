export default function List() {

    const animals = ['zebras', 'bebras', 'tigrai', 'lions', 'bebras', 'elephants'];


    return (
        <ul>
            {
                animals.map((animal, index) => <li key={index}>{animal}</li>)
            }
        </ul>
    )




}