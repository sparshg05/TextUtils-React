import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        //console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick= ()=>{
        //console.log("Uppercase was clicked");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick= ()=>{
        setText("");
        props.showAlert("Cleared all text!","success");
    }
    const handleCopy= ()=>{
        // let newText=document.getElementById("myBox");
        // newText.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleUndoClick= ()=>{
        let length=text.length-1;
        while(text.charAt(length)===" "){
            length-=1;
        }
        let newText= text.substring(0,length);
        setText(newText);
        props.showAlert("Text undone!","success");
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);                 //Enables us to write in the textarea
    }

    const [text, setText] = useState('');           //1st parameter is variable and the 2nd is Function to update it
    //setText("New Text");                          // Correct way to update the text
    
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-2'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} 
                style={{backgroundColor: props.mode==='dark'?'#6573a8':'white' , 
                        color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUndoClick}>Undo</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text summary</h2>
            {/* When filter() func returns true for a particular element only then the element will present in the array otherwise not  */}
            <p>-- {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>-- {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text : "Enter something above to preview it here"}</p>
        </div>
        </>
    )
}
