import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Flist.css';

const Flist = (props) => {
    const {image, name, bio, price} = props.friend;
    return (
        <div className="flist">
            <div>
                <img src={image} alt={name}/>
            </div>
            <div className="bio-area">
                <h4 className="flist-name"> {name} </h4>
                <p className="subject"><i>Subject: {bio}</i></p>
                <p>Salary: ${price}</p>
                <button className="add-friend"
                    onClick={()=>props.addFriend(props.friend)}>
                    <FontAwesomeIcon icon={faPlus}/> Add Friend
                </button>
            </div>
        </div>
    );
}

export default Flist;