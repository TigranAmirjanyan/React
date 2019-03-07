import React from 'react';
import {withRouter} from 'react-router-dom';
import {handleResponse} from '../../../helpers'
import Loading from '../loding'
import  {API_URL} from '../../../config'
import './Search.css';
class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            inputValue:null,
            searchResults : [],
            searchQuery:'',
            loading:false,
            history:props.history
        }

        this.handleChange = this.handleChange.bind(this) 
    }

    handleChange(event){
        const searchQuery = event.target.value
        this.setState({searchQuery})
        if(!searchQuery){
            return (<h1>Goodbye</h1>)
        } 
        this.setState({loading:true})
        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
        .then(handleResponse)
        .then((data) => {
          this.setState({
            searchResults : data,
            loading: false
          })
        })
    }
    renderSearchResults(){
      const{loading,searchResults,searchQuery}=this.state
      if(!searchQuery){
        return ''
      }
      if(searchResults.length>0){
        return(
          <div className='Search-result-container' >
             {searchResults.map((result)=>(
               <div className='Search-result' key={result.id}>
                  {result.name}({result.symbol})
               </div>
             ))}
          </div>
        )
      
      }
      if(!loading){
        return(
          <div className='Search-result-container'>
            <div className='Search-no-result'>No results found</div>
          </div>
        )
      }

    }
    render(){
            const { searchResults , loading} = this.state
        return(
            <div className='Search'>
                <span className='Search-icon'/>
                <input className='Search-input' type='text' placeholder='currency name' onChange={this.handleChange} />
                {loading && <div className='Search-loading' ><Loading height='12px' whidth='12px'/></div>}
                {this.renderSearchResults()}
            </div>
        )
    }
}

export default withRouter(Search)

