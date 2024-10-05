import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick=(event)=>{
    console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  }
  const handleLowClick=(event)=>{
    console.log("Lowercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  }
  const handleOnChange=(event)=>{
    console.log("On change is handled now");
     setText(event.target.value);
     
  }
  const [text, setText] = useState('Enter text here');
  // text = "new text"; //wrong way to change the state
  // setText("new text"); //correct way to change the state
  return (
    <>
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} className="form-control" id="mybox" rows="8"/>
    </div>
    
    <button type="submit" onClick={handleUpClick} className="btn btn-primary mx-2">Conver to uppercase</button>
    <button type="submit" onClick={handleLowClick} className="btn btn-primary mx-2">Conver to Lowercase</button>
  </div>
  <div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words , {text.length} characters</p>
    <p>{0.008*text.split(" ").filter((element)=>{
      return element.length!==0
    }).length} Minutes read</p>
    <h3>preview</h3>
  </div>
  </>
  )
}
