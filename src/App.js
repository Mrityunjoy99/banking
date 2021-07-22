import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import home from './components/home';
import Login from './components/Login';
import Register from './components/register';
function App() {
  return (
	  <div className="App">
		  <Router>
			  <Redirect from = '/' to ='/home'/>
			  <Route path='/home' exact component={home} />
			  <Route path='/login' exact component={Login} />
			  <Route path='/register' component={Register}/>
		  </Router>
	  </div>
  );
}

export default App;
