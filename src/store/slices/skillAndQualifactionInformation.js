import { createSlice } from '@reduxjs/toolkit'


export const skillAndQualitiesData = createSlice({
   name:"skillAndQualitiesData",
   initialState: {
    userData:[],
    loading:false,
    error:null
   },

})

export default skillAndQualitiesData.reducer