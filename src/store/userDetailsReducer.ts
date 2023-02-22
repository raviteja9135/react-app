
import {createAction, createReducer } from '@reduxjs/toolkit';
import { setDocument } from './server';
import { RootState } from './store';


// const serverURL = 'http://localhost:9080';
export interface User {
    user: {
        firstName: string,
        lastName: string,
        email: string,
        phone:string,
        password:string,
        profilePic: any
    }
}

const initialState: User = {
    user: {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        password:'',
        profilePic: null
    }
};
export const USER_UPDATE_CURRENT = 'userDetail/updateCurrentUser';
export const SET_CURRENT_USER = 'userDetail/setCurrentuser';
export const USER_UPDATE_LIST = 'userDetail/userList';


const currentUserUpdate = createAction<User>(USER_UPDATE_CURRENT);
const setCurrentuser = createAction<User>(SET_CURRENT_USER);
// const addUserToHostory = createAction<User>(USER_UPDATE_LIST);
const userDetrailReducer = createReducer(initialState, (builder) => {
    builder.addCase(currentUserUpdate, (state, action) => {
        state = action.payload
        setDocument(action.payload).then((object) => {
            console.log(object)
        })
        return state;
    }).addCase(setCurrentuser, (state,action) => {
        console.log(action.payload.user);
        state["user"] = action.payload.user;
        return state;
    }).addDefaultCase((state, action) => {
    })
});

export const selectUser = (state: RootState) => state.userDetailReducer;

export default userDetrailReducer;