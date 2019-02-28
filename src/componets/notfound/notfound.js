import React from 'react'
import {Link} from 'react-router-dom'
import './notfound.css'
const NotFound=()=>{
 return (
     <div className='NotFound'>
         <h1 className='NotFound-title'>page notfound</h1>
         <Link to='/' className='NotFound-link'>go to home page</Link>

     </div>

 )

}
export default NotFound