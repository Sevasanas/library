import React from 'react';
import { PROFILE_CHANGE_SHOW } from '../../store/actionTypes';
import { useDispatch, useSelector } from 'react-redux';
import  books  from './books.png';
import './profile.css';


export const Profile = () => {
    const profileState = useSelector(state => state);
    const dispatch = useDispatch();

    const changeShow = () => {
        dispatch({
            type: PROFILE_CHANGE_SHOW
        });
    };

    console.log(profileState);

    return (
        <div>
            <h2>This is profile</h2>
            <button onClick={changeShow}>Show</button>
            {profileState.show && <img className="profile" src={books} alt="{books}" />}
        </div>
    );
};
