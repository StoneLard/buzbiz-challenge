import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../features/user';

const GetName = () => {
    const dispatch = useDispatch();
    const nameInput = useSelector(state => state.user.value.name)

    function onChangeHandler(e) {
        dispatch(setName(e))
    }

    return (
        <form className="get--name">
            <p>What's your name?</p>
            <input type="text" placeholder="John Smith" value={nameInput} onChange={e => onChangeHandler(e.target.value)}/>
        </form>
    );
};

export default GetName;