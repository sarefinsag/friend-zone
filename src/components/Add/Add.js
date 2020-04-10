import React from 'react';
import './Add.css';

const Add = (props) => {
    const add = props.add;
    const total = add.reduce((total, frnd) => total + Number(frnd.price), 0)
    return (
        <div className="ADD">
            <h4>summary</h4>
            <p>item: {add.length} </p>
            <p>salary: {total}</p>
        </div>
    );
}

export default Add;