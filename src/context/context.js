import React ,{useContext , useEffect } from 'react'
import axios from 'axios'
import { useSelector , useDispatch } from 'react-redux'
import {gitReposSliceActions} from '../redux/reposSlice'
const AppContext = React.createContext()

const AppProvider = ({children})=>{
    // get informtion from redux
    const currentPage = useSelector((state)=>state.git.currentPage)
    const perPage = useSelector((state)=>state.git.perPage)
    const apiUrl = useSelector((state)=>state.git.apiUrl)
    const sort = useSelector((state)=>state.git.sort)
    const order = useSelector((state)=>state.git.order)
    const dispatch = useDispatch()

    // fetch data function 
    const fetchRepoData = ()=>{
        dispatch(gitReposSliceActions.isCurrentLoading({type:true}))
        axios({
            url:apiUrl,
            params:{per_page:perPage , sort:sort , order:order , page:currentPage},
        })
        .then(res=>{
            const result = res.data.items
            dispatch(gitReposSliceActions.fetchRepos({data:result}))
            dispatch(gitReposSliceActions.isCurrentLoading({type:false}))
        }).catch(err=>{
            console.log(err)
            // dispatch loadint to false and dispatch error message
            dispatch(gitReposSliceActions.isCurrentLoading({type:false}))
            dispatch(gitReposSliceActions.isError({type:true , msg:err}))
        })
    }
 // fetch repos data at the begninng of the rendering 
    useEffect(()=>{
        fetchRepoData()
        // eslint-disable-next-line
    },[currentPage])

    // scroll to top function 
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    //   change pages handller 
      const pageChangeHandller = (data)=>{
        //   dispatch current page  
        dispatch(gitReposSliceActions.setCurrentPage({page:data.selected+1}))
        scrollToTop()
    }
    return <AppContext.Provider value={{
        pageChangeHandller
    }}>{children}</AppContext.Provider>
}

export const useGlopalContext =()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}