import { createSlice } from '@reduxjs/toolkit'


export const educationData = createSlice({
   name:"educationData",
   initialState: {
    userData:[],
    loading:false,
    error:null
   },

})

export default educationData.reducer