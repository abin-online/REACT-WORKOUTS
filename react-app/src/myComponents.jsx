import React,{useState} from "react"

function MyComponent(){
    let [name, setName] = useState('Guest');

    const [age, setAge] = useState(0)

    const [isEmployed, setIsEmployed] = useState(false)
    const updateName = () => {
    //   name = 'Abin';
    //   console.log(name);
        setName('Abin')
    }

    const incrementAge = () => {
        setAge(age+1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return(
      <div>
        <p>Namee: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment age</button>
        
        <p>Is employed: {isEmployed ? 'Yes' : 'No'}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
      </div>
    )
}

export default MyComponent