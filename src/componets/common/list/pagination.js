import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.css'

const Pagination = (props)=>{
    const{page,totalPages,handlePaginationClick}=props

    return(
        <div className='Pagination'>
            <button disabled={page===1} className='Pagination-button' onClick={()=>{handlePaginationClick('fftg')}} >&larr;</button>
            <span className='Pagination-info'>page {page} of {totalPages}</span>
            <button disabled={page===totalPages} className='Pagination-button' onClick={()=>{handlePaginationClick('next')}}>&rarr;</button>
        </div>
    )
}
Pagination.propTypes={
    page:PropTypes.number.isRequired,
    totalPages:PropTypes.number.isRequired,
    handlePaginationClick:PropTypes.func.isRequired
}
export default Pagination