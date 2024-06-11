import React, { useState } from 'react';

export default function Textform(props) {
  const handleUPclick = () => {
    console.log("uppercase was clicked");
    let newtext=text.toUpperCase()
    setText(newtext);
    props.showAlert("converted to uppercase","success")
  };
  const handlelowclick = () => {
    console.log("uppercase was clicked");
    let newtext=text.toLowerCase()
    setText(newtext);
    props.showAlert("converted to lowercase","success")
  };
  const handleclrclick = () => {
    console.log("cleartext was clicked");
    let newtext=''
    setText(newtext);
    props.showAlert("text cleared","success")
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value); // Update text state with the new value
    
  };

  const [text, setText] = useState('');

  return (
    <> 
    <div className='container' style={{color:props.mode===`dark`? 'white':'#042743'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode===`dark`? 'grey':'white'}}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn-primary mx-2" onClick={handleUPclick}>
        convert to uppercase
      </button>
      <button className="btn-primary" onClick={handlelowclick}>
        convert to lowercase
      </button>
      <button className="btn-primary mx-2" onClick={handleclrclick}>
      clear text
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode===`dark`? 'white':'#042743'}}  >
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words,{text.length}
        <p>
          number of minutes = {0.084*text.split(" ").length}
        </p>
        <p>
          <h2>
            Preview
          </h2>
          {text}
        </p>
        {text.length>0?text:"Enter something in the textbox above to preview it here"}
      </p>

    </div>
    </>

  
  );
}
