import { configureStore } from "@reduxjs/toolkit";
import repoSlice from './reposSlice'

const store = configureStore({
    reducer:{
        git:repoSlice.reducer
    }
})

export default store
