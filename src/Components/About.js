import React from 'react'

export default function About(props) {
    
    console.log(props.mode);
    let myStyle={   
        color:props.mode==='dark'?'white':'rgb(12 65 106)',
        backgroundColor:props.mode==='dark'?'rgb(12 65 106)':'white'
    }

return (
    <div>
                <div className="container" style={{backgroundColor:props.mode==='dark'?'rgb(4 39 67)':'white',
            color:props.mode==='dark'?'white':'black'}}>
                <h2>About Us</h2>
                <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Text To Be Analyzed</strong>
                </button>
                </h2>
                <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    In this application we are going to count the words characters and convert them in LowerCase or UpperCase or Reverse Them</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>  Basic Application </strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Very Basic application to do small tasks just to play with data
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Give your FeedBack</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Your FeedBack for my small effort is highly valuable
                    </div>
                </div>
            </div>
            </div>

                </div>
                    
             </div>
  )
}
