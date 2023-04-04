import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Converted to upper case!","success");
  };
  const handleLoclick = () => {
    
    let newText = text.toLowerCase();
    setText(newText);
    // showAlert("Converted to lower case!","success");

  };
  
  const handleSCclick = () => {
    
    let newText = text.charAt(0).toUpperCase() +text.substring(1).toLowerCase();
    setText(newText);
  };

  const handleClearclick = () => {
   
    let newText = '';
    setText(newText);
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const [text, setText] = useState("Enter text here");
  // setText("new text"); //correct way to change the text
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="9"
            value={text}
            onChange={handleOnchange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpclick}>convert to upper case</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLoclick}>convert to lower case</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClearclick}>clear text</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleSCclick}>Sentence case</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>

      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        {/* / <p>{text.split(" ").length} words and {text.length} characters</p>  */}
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  );
}
