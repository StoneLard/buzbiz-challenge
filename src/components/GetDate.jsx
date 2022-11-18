import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDay, setMonth, setYear } from '../features/user'

const GetDate = () => {
    const dateInput = useSelector(state => state.user.value.date)
    const dispatch = useDispatch()


    return (
        <div className="get--date">
            <p>What date?</p>
            <div className="date--input--container">
                <div className="date--input">
                    <label htmlFor="month">Month</label>
                    <input onChange={e => dispatch(setMonth(e.target.value))} value={dateInput.month} type="number" id="month" min="1" max="12"/>
                </div>
                <div className="date--input">
                    <label htmlFor="day">Day</label>
                    <input onChange={e => dispatch(setDay(e.target.value))} value={dateInput.day} type="number" id="day" min="1" max="31"/>
                </div>
                <div className="date--input year">
                    <label htmlFor="year">Year</label>
                    <input onChange={e => dispatch(setYear(e.target.value))} value={dateInput.year} type="number" id="year" min="2022" max="2025"/>
                </div>
            </div>
        </div>
    );
};

export default GetDate;