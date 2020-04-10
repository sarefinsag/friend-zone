import React from 'react';
import './Flist.css';

const Flist = (props) => {
    const {image, name, bio, price} = props.friend;
    return (
        <div className="flist">
            <div>
                <img src={image} alt={name}/>
            </div>
            <div>
                <h5 className="flist-name"> {name} </h5>
                <p><i>Subject: {bio}</i></p>
                <p>Salary:${price}</p>
                <button className="add-friend"
                onClick={()=>props.addFriend(props.friend)}
                >Add Friend</button>
            </div>
        </div>
    );
}

export default Flist;