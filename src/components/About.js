import React from 'react'

export default function About(props) {

    // const[myStyle,setMyStyle]= useState({                                  //myStyle is an object to change the CSS of the container
    //     color:"black",                                                    //Here myStyle is made a state variable
    //     backgroundColor:"white"
    // });

    let myStyle={
        color: props.mode==='dark'?'white':'rgb(90 97 137)',
        backgroundColor: props.mode==='dark'?'rgb(90 97 137)':'white'
    }
    // const [btnText, setBtnText] = useState("Enable dark mode")

    // const toggleStyle= ()=>{
    //     if(myStyle.color==="black"){
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black",
    //             border: "1px solid white"
    //         })
    //         setBtnText("Enable light mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setBtnText("Enable dark mode");
    //     }
    // }

    return (
        <div className="container" style={{color: props.mode==='dark'?'white':'rgb(90 97 137)'}}>                       
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button my-1" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                    aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyse your text</strong> 
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" 
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils gives you a way to analyse your text quickly and effectiently. Be it word count, character count or speed of word.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed my-1" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
                    aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong> 
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" 
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils is a free character count tool that provides instant character count and word count statistics for a 
                        given text. TextUtils reports number of words and characters. Thus it is suitable for writing text with word /
                        character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed my-1" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" 
                    aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong> 
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" 
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera, etc. 
                        It suits to count characters in facebook, blogs, books, excel document, pdf document, essays, etc.
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div> */}
        </div>
    )
}
