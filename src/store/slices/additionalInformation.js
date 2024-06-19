import { createSlice } from '@reduxjs/toolkit'


export const additionalData = createSlice({
   name:"additionalData",
   initialState: {
    userData:[],
    loading:false,
    error:null
   },

})

export default additionalData.reducer