import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from './componets/common/Header'
import List from './componets/common/list/list'
import './index.css'
const App=()=>{
    return(
      <BrowserRouter>
        <div>
      <Header/>
        <Switch>
        <Route path='/' component={List} exact/>
        </Switch>
        </div>
      </BrowserRouter>
    )
} 
ReactDOM.render(<App/>,document.getElementById('root'));