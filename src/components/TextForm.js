import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied !","success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Exatra spaces has removed !","success")
    }

    const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color : props.mode === 'dark'? 'white':'black'}} >
    <h1>{props.headings}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} 
        style={{backgroundColor : props.mode === 'dark'? 'grey':'white', color : props.mode === 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UppperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color : props.mode === 'dark'? 'white':'black'}}> 
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words. {text.length} charecters.</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length >0 ? text : "Enter something in the textbox above to preview it here."}</p>
    </div>
    </>  
  )
}
