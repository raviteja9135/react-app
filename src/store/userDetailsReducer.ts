
import {createAction, createReducer } from '@reduxjs/toolkit'
import { RootState } from './store';


export interface User {
    userName: string,
    password: string
}
interface userState {
    current: User,
    userList:User[]
}

const initialState: userState = {
    current: {
        userName:'',
        password:'',
    },  
    userList:[{
        userName:'',
        password:""
    }]
};
export const USER_UPDATE_CURRENT = 'userDetail/currentUser';
export const USER_UPDATE_LIST = 'userDetail/userList';


const currentUserUpdate = createAction<User>(USER_UPDATE_CURRENT);
const addUserToHostory = createAction<User>(USER_UPDATE_LIST);
const userDetrailReducer = createReducer(initialState, (builder) => {
    builder.addCase(currentUserUpdate, (state, action) => {
        state.current = action.payload
        return state
    }).addCase(
        addUserToHostory, (state, action) => {
        state.userList = [
            ...state.userList,
            action.payload
        ]
        }
    ).addDefaultCase((state, action) => {
        // default case
    })
});
export const selectUser = (state: RootState) => state.userDetailReducer;

export default userDetrailReducer;