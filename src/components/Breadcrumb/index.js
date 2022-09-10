import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useNavigate } from "react-router-dom";
import "./Breadcrumb.css"


const CustomBread = ({items}) => {
    const navigate = useNavigate();
    return (
        <Breadcrumb>
            {items.map((item, y) => (y === items.length - 1 ? 
                (<Breadcrumb.Item style={{fontSize: "14px"}} key={y} active>{item.name}</Breadcrumb.Item>) :
                (<Breadcrumb.Item style={{fontSize: "14px"}} key={y} onClick={() => navigate(item.link)}>{item.name}</Breadcrumb.Item>)
            ))}
        </Breadcrumb>
    )
}

export default CustomBread