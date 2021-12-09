import React from 'react'
import './error.style.scss'
import { useSelector } from 'react-redux'
const Error = () => {
    const errorMsg = useSelector((state)=>state.git.errorMas)
    return (
        <section>
            <div className="error_container">
                <div>
                    <h2>Error</h2>
                    <p>{errorMsg}</p>
                </div>
            </div>
        </section>
    )
}

export default Error
