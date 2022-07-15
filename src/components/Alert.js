import React from 'react'

//props.alert && -> If this condition becomes true only then the further code will run otherwise it will return
function Alert(props) {

    const capitalize= (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        // height is given to avoid the Layout Shift
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}  
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}          
        {/* This is not included in the div as this is a javascript . Therefore it is in brackets.*/}
        </div>
    )
}

export default Alert
