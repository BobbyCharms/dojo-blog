import Navbar from './Navbar';
import Home from './Home';

function App() {
  // Variables used below to fill in {} in JSX to return html elements when rendered using babel in the browser
  // const title = 'Welcome to the New Blog';
  // const likes = 50;
  // const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* Example filler code that's hard coded vs code that is dynamic components
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ 10 }</p>
        <p>{ "hello, ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }>Google Site</a> */}
      </div>
    </div>
  );
}

export default App;
