// a hook in react starts with use; a hook is a function that lets you hook into react features from a functional component
// useState is a react hook; the {} around destructures it  
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // ****************** Learning Material
        // [{ title: 'My new website', body: 'lorem ipsum...', author: 'Marin', id: 1 },
        // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Peach', id: 3 }]

    const [name, setName] = useState('Marin');

    // ****************** Learning Material
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        // Using setTimeout to simulate a delay in getting data from a server for simulation purposes
        setTimeout(() => {
        console.log('use effect ran');
        // console.log(blogs);
        // console.log(name);
        fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                console.log(err.message);
                setIsPending(false);
                setError(err.message);
            });
        }, 1000);
    }, []);

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
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            <button onClick={() => setName('Bill')}>Change Name</button>
            <p>{ name }</p>
            
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Marin')} title="Marin's Blogs"/>}
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