import { createSlice } from '@reduxjs/toolkit'


export const personalData = createSlice({
   name:"personalData",
   initialState: {
    userData:[],
    loading:false,
    error:null
   },

})

export default personalData.reducer