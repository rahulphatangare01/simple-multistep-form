import { createSlice } from '@reduxjs/toolkit'


export const workExperianceData = createSlice({
   name:"workExperianceData",
   initialState: {
    userData:[],
    loading:false,
    error:null
   },

})

export default workExperianceData.reducer