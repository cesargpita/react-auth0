import './App.css';

import { Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Nav from './Nav'

function App() {
  return (
    <>
      <Nav />
      <div className="body">
        <Route path='/' exact component={Home} />
        <Route path='/profile' exact component={Profile} />
      </div>
    </>
  );
}

export default App;
