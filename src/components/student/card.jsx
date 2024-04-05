import React from 'react';
import './card.css';

const StudentCard = (props) => {
    return (
        <div className="box">
            <div className="rectangle">
                <div className="heading-4">{props.dept}</div>
            </div>

            <div className="frame-4">
                <div className="subheading-2">{props.status}</div>
            </div>
        </div>
    );
};

export default StudentCard;
