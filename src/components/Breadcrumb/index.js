import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./Breadcrumb.css"


const CustomBread = ({items}) => {
    return (
        <Breadcrumb>
            {items.map((item, y) => (y === items.length - 1 ? 
                (<Breadcrumb.Item style={{fontSize: "14px"}} key={y} active>{item}</Breadcrumb.Item>) :
                (<Breadcrumb.Item style={{fontSize: "14px"}} key={y}>{item}</Breadcrumb.Item>)
            ))}
        </Breadcrumb>
    )
}

export default CustomBread