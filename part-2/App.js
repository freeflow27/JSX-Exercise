const App = () => {
    return (
        <div>
            <Tweet
            name="Alvaro"
            username="FreeFlowYo"
            date={new Date().toDateString()}
            message="Enter dumb bear tank to the rescue"
            />
            <Tweet
            name="Nicole"
            username="Nicolyra"
            date={new Date().toDateString()}
            message="Warlock go BRRRRRRRRR"
            />
            <Tweet
            name="Kenny (Chorp)"
            username="KungFu"
            date={new Date().toDateString()}
            message="CHORP CHORP CHORP CHORP CHORP"
            />
        </div>
    )
}