import React from 'react';
import TopNav from './TopNav';
import GetName from './GetName';
import Questions from './Questions';
import GetDate from './GetDate';
import { useSelector } from 'react-redux';




const Form = () => {
    const page = useSelector(state => state.form.value.page)

    function FormPage(props) {
        switch(props.page) {
            case 1: return <GetName />;
            case 2: return <Questions />;
            case 3: return <GetDate />;
            default: return <GetName />;
        }
    }

    return (
        <div className="form">
            <TopNav />
            <FormPage page={page} />
        </div>
    );
};

export default Form;