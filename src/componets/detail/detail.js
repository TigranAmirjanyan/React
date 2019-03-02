import React from 'react'
import {handleResponse,renderChangePercent} from '../../helpers'
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
     const currencyId=this.props.match.params.name
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

      console.log(currency)
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
          <div className='Detail'>
            <h1 className='Detail-heading'>{currency.name} ({currency.symbol})</h1>
            <div className='Detail-container'>
             <div className='Detail-item '>
                Price <span className='Detail-value'>$</span>{currency.price}
             </div>
             <div className='Detail-item '>
                Rank <span className='Detail-value'>$</span>{currency.rank}
             </div>
             <div className='Detail-item '>
                24H Change <span className='Detail-value'>{renderChangePercent(currency.percentChange24h)}</span>
             </div>
             <div className='Detail-item '>
                <span className='Detail-title'>Market cap</span>
                <span className='Detail-dollar'>$</span>
                {currency.marketCap}
             </div>
             <div className='Detail-item '>
                <span className='Detail-title'>24H Volume</span>
                <span className='Detail-dollar'>$</span>
                {currency.volume24h}
             </div>
             <div className='Detail-item '>
                <span className='Detail-title'>Total Supply</span>
                {currency.totalSupply}
             </div>
            </div>
          </div>
      )

    }

}
export default Detail


   

