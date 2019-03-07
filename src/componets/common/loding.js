import React from 'react'
import './Loading.css'
import PropTypes from 'prop-types'
const Loading = (props)=>{
    const {height,width}=props
    return(
        <div className='Loading' style={{width, height}}></div>
    )
    Loading.defaultProps={
        whidth:'28px',
        height:'28px'
    }
    Loading.propTypes={
        height:PropTypes.string,
        whidth:PropTypes.string
    }
}

export default Loading