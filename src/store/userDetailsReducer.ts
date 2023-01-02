
import {createAction, createReducer } from '@reduxjs/toolkit'
import { RootState } from './store';
interface userState {
    userName: string,
    password: string
}

const initialState = {
    userName:'l',
    password:'p'
} as userState;

const userDetrailReducer = createReducer(initialState, (builder) => {
    builder.addCase(createAction<userState>('userDetail/update'), (state, action) => {
        console.log(action);
        state = action.payload
        console.log(state);
        return state
    }).addDefaultCase((state, action) => {
        console.log(state.userName, state.password);
    })
});
export const selectUser = (state: RootState) => state.userDetailReducer;

export default userDetrailReducer;