import React from 'react';
import './Add.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Add = (props) => {
    const add = props.add;
    const total = add.reduce((total, frnd) => total + Number(frnd.price), 0)
    return (
        <div className="ADD overview">
            <h4>Overview</h4>
            <p><h4><FontAwesomeIcon icon={faUserPlus}/> {add.length}</h4></p>
            <p className="salary">Net Salary: ${total}</p>
        </div>
    );
}

export default Add;