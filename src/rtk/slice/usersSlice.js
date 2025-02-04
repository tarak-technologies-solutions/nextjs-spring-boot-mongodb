import axios from "axios";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    loading : false,
    responseMsg : "",
    users: [],
    user: null,
    errorMsg: ""
}

//const BASE_URL = "http://localhost:8080"

//http://localhost:8080/users/save

export const createUser = createAsyncThunk("createUser", async (user) => {
    console.log(user)
    const response = await axios.post("http://localhost:8080/users/save",user);
    return response.data;
})

export const fetchUsersApi = createAsyncThunk("fetchUsersApi",async () => {
    const response = await axios.get("http://localhost:8080/users")
    return response.data
})

//http://localhost:8080/users/delete/all

export const deleteAllUsersApi = createAsyncThunk("deleteAllUsersApi", async () => {
    const response = await axios.delete("http://localhost:8080/users/delete/all")
    return response.data
})

export const fetchUserByIdApi = createAsyncThunk("fetchUserByIdApi", async (id) => {
    const response = await axios.get(`http://localhost:8080/users/${id}`)
    return response.data;
})

export const deleteUserById = createAsyncThunk("deleteUserById", async (id) => {
    const response = await axios.delete(`http://localhost:8080/users/delete/${id}`)
    return response.data;
})

// export const updateUser = createAsyncThunk("user/updateUser", async ({id,updateUser}) => {
//     console.log(id,updateUser)
//     const response = await axios.put(`http://localhost:8080/users/update/${id}`,updateUser)
//     return response.data;
// })

// export const updateUserApiCall = createAsyncThunk("user/Update", async ({id,user},{rejectWithValue}) =>{
//     console.log(id,user)
//     try {
//         const response = await fetch(`http://localhost:8080/users/update/${id}`,{
//             method : "PUT",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify(user)
//         });
//         if (!response.ok) {
//             throw new Error("Failed to update user");
//         }
//         return response.json();
//     } catch (error) {
//         return new  rejectWithValue(error.message)
//     }
// })

// export const updateUser = createAsyncThunk(
//     'users/updateUser',
//     async ({ id, userData }) => {
//       try {
//         const response = await axios.put(`/api/users/${id}`, userData);
//         return response.data;  // Return the updated user data
//       } catch (error) {
//         console.error('Error updating user:', error);
//         throw error; // This will trigger the rejected case in extraReducers
//       }
//     }
//   );

const usersSlice = createSlice({
    name: "usersrtk",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createUser.pending,(state,action) => {
            state.loading = true
        })
        .addCase(createUser.fulfilled,(state,action) => {
            state.loading = false,
            state.responseMsg = action.payload
        })
        .addCase(createUser.rejected,(state,action) => {
            state.errorMsg = action.error.message
        })
        .addCase(fetchUsersApi.pending,(state)=> {
            state.loading = true
        })
        .addCase(fetchUsersApi.fulfilled,(state,action) => {
            state.loading = false,
            state.users = action.payload
        })
        .addCase(fetchUsersApi.rejected,(state,action) => {
            state.errorMsg = action.error.message
        })
        .addCase(deleteAllUsersApi.pending,(state) => {
            state.loading = true
        })
        .addCase(deleteAllUsersApi.fulfilled,(state,action) => {
            state.loading = false
            state.responseMsg = action.payload
        })
        .addCase(deleteAllUsersApi.rejected,(state,action) => {
            state.errorMsg = action.error.message
        })
        .addCase(fetchUserByIdApi.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchUserByIdApi.fulfilled, (state,action) => {
            state.loading = false
            state.user = action.payload
        })
        .addCase(fetchUserByIdApi.rejected, (state,action) => {
            state.errorMsg = action.error.message
        })
        .addCase(deleteUserById.pending, (state) => {
            state.loading = true
        })
        .addCase(deleteUserById.fulfilled, (state,action) => {
            state.loading = false
            state.responseMsg = action.payload
        })
        .addCase(deleteUserById.rejected, (state,action) => {
            state.errorMsg = action.error.message
        })
        // .addCase(updateUser.pending,(state) => {
        //     state.loading = true
        // })
        // .addCase(updateUser.fulfilled,(state,action) => {
        //     state.loading = false
        //     state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user)
        // })
        // .addCase(updateUser.rejected, (state,action) => {
        //     state.loading = false
        //     state.errorMsg = action.error.message
        // })
    }
})
export default usersSlice.reducer;