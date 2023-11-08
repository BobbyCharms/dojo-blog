import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Create';

function App() {
  // Variables used below to fill in {} in JSX to return html elements when rendered using babel in the browser
  // const title = 'Welcome to the New Blog';
  // const likes = 50;
  // const link = "http://www.google.com";

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
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
    </Router>
  );
}

export default App;
