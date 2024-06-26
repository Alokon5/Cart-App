import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[]
    ,reducers:{
        addCart:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
           return state.filter((item)=>(item.id !== action.payload)
            )
        }
    }
})

 export const {addCart,remove} = cartSlice.actions;
 export default cartSlice.reducer;