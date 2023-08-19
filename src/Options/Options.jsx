import React from "react";



const Options = (props) => {
    const options = [
        {
            text : "Enroll Now!" ,
            handler : props.actionProvider.Enroll ,
            id : 1 ,
        }
    ] ;

    const buttonsMarkup = options.map((option) => (
        <button key = {option.id} onClick={option.handler} className="optionbutton">
            {option.text}
        </button>
    ));
    return <div className="optioncontainer">{buttonsMarkup}</div>;
};

export default Options;