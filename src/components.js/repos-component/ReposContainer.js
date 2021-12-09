import React  from 'react'
import SingleRepo from '../singleRepo.js/SingleRepo'
import './repos.style.scss'
import { useSelector } from 'react-redux'
import {Loading ,Error} from '../'
const ReposContainer = () => {

    // get inforamtions from redux state mangament 
    const repoData = useSelector((state)=>state.git.gitRepos)
    const isLoading = useSelector((state)=>state.git.isLoading)
    const isError = useSelector((state)=>state.git.isError)

    if(isLoading){
        return <Loading/>
    }
    if(isError){
        return <Error/>
    }
    return (
        <section>
            <div className="repos_content-container">
                    <div className='repos_container'>
                        {
                            repoData.map((repo)=>{
                                const {node_id} = repo
                                return <SingleRepo key = {node_id} {...repo}/>
                            })
                        }
                    </div>
            </div>
        </section>
    )
}

export default ReposContainer
