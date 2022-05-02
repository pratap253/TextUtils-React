import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", "success");
  };

  const handleLowClick = () => {

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", "success");
  };

  const handleClearClick = () => {

    let newText = '';
    setText(newText);
    props.showAlert("clear text", "success");
  };

  const handleOnChanged = (event) => {

    setText(event.target.value);
  };

  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy to clickboard", "success");
  }

  const handleSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("formatted", "success");
  }

  const [text, setText] = useState("");
  // setText("i am a student");

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChanged}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-3" onClick={handleSpace}>
          remove extra space
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary </h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text in text box for preview"}</p>
      </div>
    </>
  );
}
