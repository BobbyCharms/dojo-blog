// a hook in react starts with use; a hook is a function that lets you hook into react features from a functional component
// useState is a react hook; the {} around destructures it  
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Marin', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Peach', id: 3 }
    ])

    // ****************** Learning Material
    // let name = 'robert';
    // the [] is array destructuring; the first element is the value, the second is the function that updates the value
    // in most cases it'll be setValue, whatever the value name is
    // the value could be any data type
    // const [name, setName] = useState('robert');
    // const [age, setAge] = useState(24);

    // ****************** Learning Material
    // const handleClick = (e) => {
    //     setName('charles');
    //     setAge(33);
        // console.log('hello, ninjas', e);
        // name = 'Charles';
        // console.log(name);

    // ****************** Learning Material
    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    

    return ( 
        <div className="home">
            <BlogList blogs={blogs} />
        {/* ****************** Learning Material */
            /* <h2>Homepage</h2>
           <p>{ name  is {age years old</p> *
           /* Do not invoke the function; do not put the () afterthe function. */
           /* <button onClick= {handleClick}>Click Me</button> */
            /* <button onClick= {(e) => handleClickAgain('robert', e)}>Click Me Again</button> */}
        </div>
     );
}
 
export default Home;