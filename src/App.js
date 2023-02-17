import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'

import './App.css'

const App = () => (
  <div className="app-container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </div>
)
export default App
