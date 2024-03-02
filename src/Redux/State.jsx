import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: [],
}

const initialSlice = createSlice({
  name: 'initial',
  initialState,
  reducers: {

    loginUserInfo: (state, {payload}) => {
      state.userInfo = payload
    }
    
  },
})

export const { loginUserInfo } = initialSlice.actions
export default initialSlice.reducer