import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NotFound from './componets/notfound/notfound'
import Detail from './componets/detail/detail'
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
            <Route path='/currency/:name' component={Detail}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
} 
ReactDOM.render(<App/>,document.getElementById('root'));