import React from 'react';
import {withRouter} from 'react-router-dom';
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
        .then(response => {
          return response.json().then(json => {
            return response.ok ? json : Promise.reject(json);
          });
        })
        .then((data) => {
          this.setState({
            searchResults : data
          })
        })
        .catch((error) => {
          console.log('Error', error);
        });
    }

    componentDidMount(){
        
    }

    render(){
            const { searchResults } = this.state
        console.log('searchResults',searchResults)
        return(
            <div className='Search'>
                <span className='Search-icon'/>
                <input className='Search-input' type='text' placeholder='currency name' onChange={this.handleChange} />
                {searchResults.map((result)=>{
                    return (<div className='Search-result-container'>
                        <span className='Search-result' onClick={()=>{this.state.history.push(`/currency/${result.id}`)}}>{result.id}</span>
                    </div>)
                })}
            </div>
        )
    }
}

export default withRouter(Search)

