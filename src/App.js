// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import React, { useState } from 'react';
import About from "./components/About"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// let name = "Harry3";

//^ function based component
function App() {

  const [mode, setkMode] = useState('light'); // wheather dark mode is enable or not
  const [alert, setAlert] = useState(null); // alert show or


  const toggleMode = () => {
    if (mode === 'light') {
      setkMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }






  return (
    //* JSX 
    //? class => className
    //? for => htmlFor
    //? tabIndex



    /*

    //^ JSX fragement
    <>                        
      <h1>This is me</h1>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React With Harry
          </a>
        </header>
      </div>
    </>

    */


    // <div className="blank">Lovely</div>

    /*

    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <navbar/>
      <img src="" alt="" />
      <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae porro voluptatum at natus expedita? Ullam pariatur dolorum eligendi. Corrupti, sint nulla, vel, accusamus vitae consequuntur laborum ullam sed deserunt fugiat eaque nostrum. Ea.</p>
      </div>
    </>
*/

    //^ Project : Text Utils
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}


      {/*       
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
            </Route>
          </switch>
        </div>
      </Router> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Routes>
            {/* //  /users  ---> Component 1
            //  /users/home ---> component 2 */}
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>

      </Router>



    </>


  );
}

export default App;
