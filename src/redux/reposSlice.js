import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gitRepos:[],
    apiUrl:`https://api.github.com/search/repositories?q=created:>2021-10-22`,
    perPage:30,
    totalResults:1000,
    currentPage:1,
    isLoading:true,
    isError:false,
    errorMas:'',
    sort:'stars',
    order:'desc',
}

const gitReposSlice = createSlice({
    name :"git_repos",
    initialState,
    reducers:{
        // get repos data 
        fetchRepos(state,action){
            state.gitRepos = action.payload.data
        },
        isCurrentLoading(state,action){
            state.isLoading = action.payload.type
        },
        isError(state , action){
            state.isError = action.payload.type
            state.errorMas = `${action.payload.msg}`
        },
        setCurrentPage(state,action){
            state.currentPage = action.payload.page
        }
    }
})
export const gitReposSliceActions = gitReposSlice.actions
export default gitReposSlice