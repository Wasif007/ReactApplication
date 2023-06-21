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
                    
                </button>
                </h2>
                <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>

                </div>
                    
             </div>
  )
}
