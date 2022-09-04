import React from "react";

const MainMenu = ({option}) => {
    return (
        <>
            <img src={option.img}></img>
            <p>{option.text}</p>
        </>
    )
}

export default MainMenu