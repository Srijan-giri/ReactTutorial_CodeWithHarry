
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
        props.showAlert("Converted to Uppercase", "success");

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
        document.getSelection().removeAllRanges();
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
                <h1 className='mb-2'>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <button disabled={text.length === 0} className="btn btn-primary w-100 m-1" onClick={handleUpClick}>Convert to Uppercase</button>
                        </div>
                        <div className="col-lg-2 col-md-4 col-12">
                            <button disabled={text.length === 0} className="btn btn-secondary w-100 m-1" onClick={handleDownClick}>Convert to Lowercase</button>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <button className="btn btn-warning w-100 m-1" onClick={handleClearClick}>Clear Text</button>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <button disabled={text.length === 0} className="btn btn-success w-100 m-1" onClick={handleCapitalizeClick}>Capitalized Text</button>
                        </div>
                        <div className="col-lg-2 col-md-4 col-5">
                            <button disabled={text.length === 0} className="btn btn-info w-100 m-1" onClick={handleCopy}>Copy Text</button>
                        </div>
                        <div className="col-lg-2 col-md-4 col-7">
                            <button disabled={text.length === 0} className="btn btn-danger w-100 m-1" onClick={handleExtraSpace}>Remove Extra Space</button>
                        </div>
                    </div>
                </div>


                {/* <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-secondary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-warning mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-success mx-2" onClick={handleCapitalizeClick}>Capitalized Text</button>
                <button className="btn btn-info mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-danger" onClick={handleExtraSpace}>Remove Extra Space</button> */}

            </div>
            <div className='container my-3 ' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
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
