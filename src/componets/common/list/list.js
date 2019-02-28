import React from 'react'
import {API_URL} from '../../../config'
import {handleResponse} from '../../../helpers'
import '../loding'
import Loading from '../loding';
import Table from './Table'
import Pagination from './pagination'
class List extends React.Component{
    constructor(){
        super()
        this.state={
            currencies:[],
            loading:true,
            error: null,
            page: 1,
            totalpages:0
        }
        this.handlePaginationClick=this.handlePaginationClick.bind(this)
    }
     componentDidMount(){
         this.fetchCurrencies()
     }
     handlePaginationClick(direction){
         console.log('Click')
         let NextPage=this.state.page
         NextPage=direction==='next'?NextPage+1:NextPage-1
         this.setState({page:NextPage},this.fetchCurrencies)
         
         return
     }
     fetchCurrencies(){
        const {page}=this.state
         this.setState({loading:true})
        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=10`)
        .then(handleResponse)
           .then((data)=>{
               const {totalPages,currencies}=data
               console.log(data)
               this.setState({
                   currencies,
                   loading:false,
                   totalPages
                })
           })
           .catch((error) => {
               console.log(error)
               this.setState({error:error.message, loading:false})
           })
     }
     renderChangePercent(percent){
         if(percent>0){
             return(<span className='percent-raised'>{percent}% &uarr;</span>)
         }
         return(<span className='percent-fallen'>{percent}&darr;</span>)

     }
    render(){
        const {loading,error,currencies,page,totalPages}=this.state
        if(loading){
        return(<div className='loading-container'><Loading/></div>)
        }
        if(error){
            return(<div className='error'>{error}</div>)
        }
        return(
        <div>
            <Table currencies={currencies}  renderChangePercent={this.renderChangePercent}/>
            <Pagination handlePaginationClick=
                {this.handlePaginationClick}
                page={page}
                totalPages={totalPages}/>
        </div>
        
        )

        
       
    }
    

}
export default List