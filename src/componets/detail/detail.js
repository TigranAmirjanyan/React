import React from 'react'
import {handleResponse} from '../../helpers'
import Loading from '../common/loding';
import './Detail.css'
class  Detail extends React.Component{
   constructor(){
     super()
     this.state={
       loading:false,
       currency:{},
       error:null

     }
   }
   componentDidMount(){
     const currencyId=this.props.match.params.id
     this.setState({loading:true})
    fetch(`https://api.udilia.com/coins/v1/cryptocurrencies/${currencyId}`)
    .then(handleResponse)
    .then(currency=>{this.setState({currency,loading:false})})
    .catch((error) => {
      this.setState({loading:false,error:error.errorMessage})
    }); 
   }
    render(){
      const{currency,error,loading}=this.state
      if (loading){
        return(
          <div className='loading-container'><Loading/></div>
        )
      }
      if(error){
        return(
          <div className='error'>{error}</div>
        )
      }
      return(
          <div>
            hjhu  
          </div>
      )

    }

}
export default Detail


   

