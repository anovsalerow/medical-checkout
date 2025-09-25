import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const urlBE = 'http://localhost:8080'
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
    const res = await fetch(`${urlBE}/me`, { credentials: "include" });
    if (!res.ok) return null;
    return await res.json();
});

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await fetch(`${urlBE}/login`, {
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

export const refreshToken = createAsyncThunk(
    "auth/refreshToken",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${urlBE}/renewal`, {
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
    await fetch(`${urlBE}/logout`, { method: "POST", credentials: "include" });
    return null;
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
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
        .addCase(logoutUser.fulfilled, (state) => {
            state.user = null;
        })
        .addCase(refreshToken.fulfilled, (state, action) => {
            state.user = action.payload.user;
        });
    },
});

export default authSlice.reducer;
