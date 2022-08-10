const App = () => {
    return (
        <div>
      <Person
        name="Joey"
        age={105}
        hobbies={["sleeping, snuggling, eating"]}
      />
      <Person 
        name="Strider" 
        age={49} 
        hobbies={["headbutting, peeing"]} 
      />
      <Person
        name="Waffles"
        age={9}
        hobbies={["sleeping", "bullying Lupin"]}
      />
      <Person
        name="Lupin"
        age={4}
        hobbies={["playing, swatting, terrorizing everyone, scratching"]}
      />
    </div>
    )
}