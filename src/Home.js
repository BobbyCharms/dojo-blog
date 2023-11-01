// a hook in react starts with use; a hook is a function that lets you hook into react features from a functional component
// useState is a react hook; the {} around destructures it  
import { useState } from 'react';

const Home = () => {
    // let name = 'robert';
    // the [] is array destructuring; the first element is the value, the second is the function that updates the value
    // in most cases it'll be setValue, whatever the value name is
    // the value could be any data type
    const [name, setName] = useState('robert');
    const [age, setAge] = useState(24);

    const handleClick = (e) => {
        setName('charles');
        setAge(33);
        // console.log('hello, ninjas', e);
        // name = 'Charles';
        // console.log(name);
    }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is {age} years old</p>
            {/* Do not invoke the function; do not put the () after the function. */}
            <button onClick= {handleClick}>Click Me</button>
            {/* <button onClick= {(e) => handleClickAgain('robert', e)}>Click Me Again</button> */}
        </div>
     );
}
 
export default Home;