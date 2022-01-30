import React from 'react';
import "./Loader.css"
function Loader(props) {
    return (
        <div style={{height:"85vh"}}>
<div className="loader spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>
        
    );
}

export default Loader;