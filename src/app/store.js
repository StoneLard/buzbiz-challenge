import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user'
import formReducer from '../features/form'

export default configureStore({
    reducer: {
        user: userReducer,
        form: formReducer,
    },
})
