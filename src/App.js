import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './routes/Home';
import Item from './routes/Item';

const Homepage = () => (
  <Home />
)

const Itempage = () => (
  <Item />
)

const App = () => (
  <Router>
    <div>
      {/**<Route exact path="/" component={Homepage}/> **/}
      <Route exact path="/" component={Itempage} />
    </div>
  </Router>
)
export default App;