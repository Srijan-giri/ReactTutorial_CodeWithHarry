
//! rfc

import React, { useState } from 'react'

import PropTypes from 'prop-types'



export default function TextForm(props) {

    //^ const [text, setText] = useState("Enter text here");

    const [text, setText] = useState("");

    //text = "new text"; //! wrong way to change the state
    // setText("new text"); //* correct way to change the state

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        // setText("You have clicked on handleOnClick");
        setText(newText);
        props.showAlert("Converted to Uppercase","success");

    }

    const handleDownClick = () => {
        console.log(text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear the text", "success");
    }


    const handleCapitalizeClick = () => {
        handleDownClick();
        let arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        let newText = arr.join(" ");
        setText(newText);
        props.showAlert("Converted to Capitalize", "success");


    }


    const handleCopy = () => {
        // console.log("I am copy");
        navigator.clipboard.writeText(text);
        // alert("Text Copied");
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpace = () => {
        let arr = text.split(/[ ]+/);
        let newText = arr.join(" ");
        setText(newText);
        props.showAlert("Remove the extra spaces", "success");

    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);

    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-secondary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-warning mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-success mx-2" onClick={handleCapitalizeClick}>Capitalized Text</button>
                <button className="btn btn-info mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-danger" onClick={handleExtraSpace}>Remove Extra Space</button>

            </div>
            <div className='container my-3 ' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text === "" ? 0 : text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>
            </div>

        </>

    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};


TextForm.defaultProps = {
    heading: 'Set Heading Here'
}
