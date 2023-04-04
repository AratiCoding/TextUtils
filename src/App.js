import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); //wether darmode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About"
        />
        <Alert alert={alert} />
        <div className="container my-5">
          {/* /users-->component 1
          /users/home -->--> Component 2 */}
          {/* <Routes>
            <Route exact path="/about" element={ <About/>}>
            </Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />}>
            </Route>
          </Routes> */}
          <TextForm heading="Enter the text to analyze" mode={mode} />
         
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
