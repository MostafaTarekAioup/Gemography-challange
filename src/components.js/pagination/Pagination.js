import React from 'react'
import './pagination.style.scss'
import ReactPaginate from 'react-paginate';
import { useSelector} from 'react-redux'
import { useGlopalContext } from '../../context/context';
const Pagination = () => {
    const {pageChangeHandller} = useGlopalContext()
    const perPage = useSelector((state)=>state.git.perPage)
    const totalResults = useSelector((state)=>state.git.totalResults)
    return (
        <article>
            <div className="pagination">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next>"
                                onPageChange={pageChangeHandller}
                                pageRangeDisplayed={3}
                                pageCount={Math.ceil(totalResults/perPage)}
                                previousLabel="<prev"
                                marginPagesDisplayed={2}
                                renderOnZeroPageCount={null}
                                containerClassName={'pages_container'}
                                pageLinkClassName={'page_link'}
                                activeClassName={'active_link'}
                            />
                        </div>
        </article>
    )
}

export default Pagination
