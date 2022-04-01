import { Switch, Route } from 'react-router-dom';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Projects from './routes/Projects';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route component={ () => <h1>404... Page Not Found</h1>} />
      </Switch>
    </>
  )
}

export default App;