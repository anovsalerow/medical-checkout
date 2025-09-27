import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {ENV_VAR} from '../../constants';

const BE_API = ENV_VAR.BE_API;

export const fetchCart = createAsyncThunk("cart/fetchCart", 
    async () => {
        const res = await fetch(`${BE_API}/cart`, { credentials: "include" });
        return await res.json();
    });

export const removeFromCart = createAsyncThunk("cart/removeFromCart", async (productId) => {
    const res = await fetch(`${BE_API}/cart/${productId}`, {
        method: "DELETE",
        credentials: "include"
    });
    return await res.json();
});

export const checkoutCart = createAsyncThunk("cart/checkoutCart", async (data) => {
    const res = await fetch(`${BE_API}/cart/orders`, {
        method: "PUT",
        credentials: "include"
    });
    return await res.json();
});

export const addDemoProducts = createAsyncThunk("cart/addDemoProducts", async () => {
    const res = await fetch(`${BE_API}/cart/demo`, {
        method: "PUT",
        credentials: "include"
    });
    return await res.json();
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        loading: false,
        error: null,
        successMessage: null
    },
    reducers: {
        clearSuccessMessage: (state) => { state.successMessage = null; }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCart.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload.items;
        })
        .addCase(removeFromCart.fulfilled, (state, action) => {
            state.items = action.payload.items;
        })
        .addCase(checkoutCart.fulfilled, (state, action) => {
            state.items = [];
            state.successMessage = action.payload.message;
        });
    }
});

export default cartSlice.reducer;
