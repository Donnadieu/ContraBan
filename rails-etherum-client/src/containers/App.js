import React from 'react'
import './App.css';
import {getRoutes} from '../containers/getRoutes'

const App = (props) =>
    <div className="App">
      { getRoutes(props.store) }
    </div>

export default App;
