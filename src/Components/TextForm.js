import React,{useState} from 'react'

export default function TextForm(props) {
const [text, setText] = useState("Enter Text here");
const hanlderUpCase=()=>{
let texte=text;
setText(texte.toUpperCase());
props.settingAlert("Text changed to UpperCase","success");
}
const hanlderLoCase=()=>{
    let texte=text;
    setText(texte.toLowerCase());
    props.settingAlert("Text changed to LowerCase","success");
    }
const handlerOnChange=(event)=>{
setText(event.target.value);
}

const hanlderReverse=()=>{
let newText=text.split(" ");
let reverseNewText=newText.reverse();
setText(reverseNewText.join(" "));  
props.settingAlert("Text Reversed","success");
}
const handlerSpeak=()=>{
  let speakData = new SpeechSynthesisUtterance();
  speakData.text=text;
  speechSynthesis.speak(speakData);
  props.settingAlert("Text to be Spoken","success");
  }
  
return (
    <>
<div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3" >
    <textarea className="form-control" value={text} onChange={handlerOnChange}
    style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} 
    id="myBox" rows="8"></textarea>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={hanlderUpCase}>To UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={hanlderLoCase}>To LowerCase</button>
    <button disabled={text.length===0}  className="btn btn-primary my-2 mx-1" onClick={hanlderReverse}>Reverse</button>
    <button disabled={text.length===0} type="submit" onClick={handlerSpeak} className="btn btn-warning mx-2 my-2">Speak</button>
  </div>
</div>
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary Here</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words {text.length} characters</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter Text in box to be previewed"}</p>
</div>

</>
)
}
