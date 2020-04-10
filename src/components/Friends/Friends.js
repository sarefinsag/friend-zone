import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Flist from '../Flist/Flist';
import Add from '../Add/Add';
import "./Friends.css";

const Friends = () => {
    const first15 = fakeData.slice(0, 15)
    const [friends] = useState(first15)
    const [add, setAdd] = useState([])

    const addFriend = (friend)=> {
        const newFriend = [...add, friend]
        setAdd(newFriend)
    }
    return (
        <div className="friends-container">
            <div className="Flist-container">
                {
                    friends.map(frnd => <Flist
                    addFriend={addFriend}
                    friend={frnd}
                    >

                    </Flist>)
                }
            </div>
            <div className="add-container">
                <Add add={add}></Add>
            </div>
            
        </div>
    )
}

export default Friends;