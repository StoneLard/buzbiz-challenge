import React from 'react';
import profile from './profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { goBack, goForward } from '../features/form';

const TopNav = () => {
    const dispatch = useDispatch()
    const page = useSelector(state => state.form.value.page)

    return (
        <div className="top--nav">
            <div className="arrow--container">
                <button
                    className={`back--arrow arrow ${page === 1 ? "hidden" : ""}`}
                    onClick={() => {
                        dispatch(goBack())
                    }}    
                />
            </div>
            <span className="line"></span>
            <img src={profile} className="profile--logo" alt="" />
            <span className="line"></span>
            <div className="arrow--container">
                <button
                    className={`forward--arrow arrow ${page === 3 ? "hidden" : ""}`}
                    onClick={() => {
                        dispatch(goForward())
                    }}
                />
            </div>
        </div>
    );
};

export default TopNav;