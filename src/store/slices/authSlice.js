import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {ENV_VAR} from '../../constants';

import {addDemoProducts} from '../slices/cartSlice.js';

const BE_API = ENV_VAR.BE_API;

export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
    const res = await fetch(`${BE_API}/me`, { 
        method: "GET",
        credentials: "include" 
    });
    if (!res.ok) return null;
    return await res.json();
});

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${BE_API}/login`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) throw new Error("Invalid email or password");
            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const registrationUser = createAsyncThunk(
    "auth/registrationUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${BE_API}/register`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) throw new Error("Email already exist");
            dispatch(addDemoProducts());
            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)

export const refreshToken = createAsyncThunk(
    "auth/refreshToken",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${BE_API}/renewal`, {
                method: "POST",
                credentials: "include",
            });
            if (!res.ok) throw new Error("Refresh failed");
            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
    await fetch(`${BE_API}/logout`, { method: "POST", credentials: "include" });
    return null;
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: true,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(fetchUser.rejected, (state) => {
            state.loading = false;
            state.user = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload || "Login failed";
        })
        .addCase(registrationUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
        })
        .addCase(registrationUser.rejected, (state, action) => {
            state.error = action.payload || "Registration failed";
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.user = null;
        })
        .addCase(refreshToken.fulfilled, (state, action) => {
            state.user = action.payload.user;
        });
    },
});

export default authSlice.reducer;
