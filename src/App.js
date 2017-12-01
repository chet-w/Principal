import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './routes/Home';
import Item from './routes/Item';
import Signup from './routes/Signup';


const App = () => (
  <Router>
    <div>
      {/**<Route exact path="/" component={Homepage}/> **/}
      <Route exact path="/" component={Signup} />
    </div>
  </Router>
)
export default App;