import {Switch, Route} from 'react-router-dom'
import LoginFrom from './components/LoginForm'
import Home from './components/Home'
import Jobs from './components/Jobs'
import JobItem from './components/JobItem'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginFrom} />
    <Route exact path="/" component={Home} />
    <Route exact path="/jobs" component={Jobs} />
    <Route exact path="/jobs/:id" component={JobItem} />
  </Switch>
)

export default App
