import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import home from './components/home';
import Login from './components/Login';
import Register from './components/register';
function App() {
  return (
	  <div className="App">
		  <Router>
			  <Redirect exact from = '/' to ='/home'/>
			  <Route path='/home' exact component={home} />
			  <Route path='/login' component={Login} />
			  <Route path='/register' component={Register}/>
			  {/* <Route path='/login' component={login}/> */}
		  </Router>
	  </div>
  );
}

export default App;
