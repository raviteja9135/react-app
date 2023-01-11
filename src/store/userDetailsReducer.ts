
import {createAction, createReducer } from '@reduxjs/toolkit';
import { setDocument } from './server';
import { RootState } from './store';


// const serverURL = 'http://localhost:9080';
export interface User {
    firstName: string,
    lastName: string,
    email: string,
    phone:string
}

const initialState: User = {
        firstName:'',
        lastName:'',
        email:'',
        phone:''
};
export const USER_UPDATE_CURRENT = 'userDetail/currentUser';
export const USER_UPDATE_LIST = 'userDetail/userList';


const currentUserUpdate = createAction<User>(USER_UPDATE_CURRENT);
// const addUserToHostory = createAction<User>(USER_UPDATE_LIST);
const userDetrailReducer = createReducer(initialState, (builder) => {
    builder.addCase(currentUserUpdate, (state, action) => {
        state = action.payload
        setDocument(action.payload).then(obj => {
            console.log(obj);
        })
        return state;
    }).addDefaultCase((state, action) => {
    })
});

export const selectUser = (state: RootState) => state.userDetailReducer;

export default userDetrailReducer;