import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cartItems: []
};

export const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        clearCart:(state)=>{
            state.cartItems=[];
        }
    }
});

export const {addItem,removeItem,clearCart}=CartSlice.actions;
export default CartSlice.reducer;