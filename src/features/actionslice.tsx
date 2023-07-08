import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IActionSate {
 toggleState: boolean;
 toggleShow: boolean;
}

const initialState: IActionSate = {
 toggleState: false,
 toggleShow: false
}

const actionSlice = createSlice({
 name: "actionInfo",
 initialState,
 reducers: {
  setToggleState(state, action: PayloadAction<boolean>) {
   state.toggleState = action.payload
  },
  setToggleShow(state, action: PayloadAction<boolean>) {
   state.toggleShow = action.payload
  }
 }
})

export const allInfo = (state: any) => state.actionInfo

export const {
 setToggleState,
 setToggleShow
} = actionSlice.actions;
export default actionSlice.reducer