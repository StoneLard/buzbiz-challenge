import React, { useState } from 'react';
import { questions } from '../utils/questions';
import { useSelector, useDispatch } from 'react-redux';
import { setQuestions } from '../features/user';

const Questions = () => {
    const questionsInput = useSelector(state => state.user.value.questions)
    const dispatch = useDispatch()
       
    function questionsHanler(position) {
        const tempArr = questionsInput.map((item, index) => index === position ? !item : item)
        dispatch(setQuestions(tempArr))
    }

    return (
        <div className="questions">
            <p className="questions--heading">What do you need help with?</p>
            <p className="questions--subheading">(Choose all that apply)</p>
            <div className="options">
                {questions.map((option, index) => {
                    return (
                        <label
                            key={option.id}
                            htmlFor={option.value}
                            className="options--label"
                        >
                            <input
                                type="checkbox"
                                id={option.value}
                                name={option.value}
                                checked={questionsInput[index]}
                                onChange={() => questionsHanler(index)}
                            />
                            <span className="checkbox"></span>
                            {option.label}
                        </label>
                    )     
                })}
            </div>
        </div>
    );
};

export default Questions;