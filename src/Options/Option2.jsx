import React from "react";



const Option2 = (props) => {
    const option2 = [
        {
            text : "Got it" ,
            handler : props.actionProvider.Name ,
            id : 1 ,
        }
    ] ;

    const buttonsMarkup = option2.map((option) => (
        <button key = {option.id} onClick={option.handler} className="optionbutton">
            {option.text}
        </button>
    ));
    return <div className="optioncontainer">{buttonsMarkup}</div>;
};

export default Option2;