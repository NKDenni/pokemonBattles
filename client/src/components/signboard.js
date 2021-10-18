import React from 'react';


const Signboard = (props) => {

    return (
    <div className="row d-flex align-content-center">
            <div className="col battles">{props.message}You encoutered a xxxxxxx</div>
    </div>
    )
}

export default Signboard;