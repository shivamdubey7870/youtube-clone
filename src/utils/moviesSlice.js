import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
  name: 'movies',

    initialState: {
    moviesList:[],
    },
    reducers:{
        setMoviesList:(state,action)=>{
            state.moviesList=action.payload;
        }
    },
});

export const {setMoviesList}=moviesSlice.actions;
export default moviesSlice.reducer;