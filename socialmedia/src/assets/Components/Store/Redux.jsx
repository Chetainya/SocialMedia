
import {configureStore , createSlice} from '@reduxjs/toolkit'

const loginCheck = createSlice({
    name : 'User Data' , 
    initialState : {isLoggedIn : false , userData : []},
    reducers : {
        login(state){
            state.isLoggedIn = !state.isLoggedIn;
        },
        signUpData(state , data){
            state.userData.push(data.payload);
        }

    }
})

const store = configureStore({
    reducer : {
        user : loginCheck.reducer
    }
})
export default store;
export const loginCheckActions = loginCheck.actions;