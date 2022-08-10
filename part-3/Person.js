const Person = (props) => {

    let vote = props.age >= 18 ? "Time to vote!!" : "You must be 18 to vote!"
    let hobbies = props.hobbies.map(h => <li>{h}</li>)


    return (
        <div>
            <p>
                Learn some information about this person:
            </p>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies
                    {hobbies}
                </ul>
            </ul>
            <h3>{vote}</h3>
        </div>

    )
}