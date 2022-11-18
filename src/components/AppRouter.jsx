import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Final from './Final';
import Name from './Name';
import Questions from './Questions';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/name" element={<Name />}/>
            <Route path="/questions" element={<Questions />}/>
            <Route path="/final" element={<Final />}/>
            <Route path="*" element={<Navigate to="/name" replace />} /> 
        </Routes>
    );
};

export default AppRouter;