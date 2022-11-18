import React from 'react';
import { dots } from '../utils/dots';
import { useSelector } from 'react-redux';

const BottomIndicator = () => {
    const page = useSelector(state => state.form.value.page)

    return (
        <ul className="bottom--indicator">
            {dots[page-1].map(dot => 
                <li key={dot.id} className={dot.className}></li>    
            )}
        </ul>
    );
};

export default BottomIndicator;