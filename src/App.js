import {NavLink, Route, Switch} from 'react-router-dom'
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';
import './App.css';
import FullUserInfo from './components/FullUserInfo';

function App() {
  return (
    <div >
      <nav className='header-nav'>
        <NavLink className='link' exact activeClassName='active-link' to='/'>Home</NavLink>
        <NavLink className='link' exact activeClassName='active-link' to='/users'>Users</NavLink>
        <NavLink className='link' exact activeClassName='active-link' to='/posts'>Posts</NavLink>
        <NavLink className='link' exact activeClassName='active-link' to='/comments'>Comments</NavLink>
      </nav>
      <Switch>
        <Route path='/users/:id' exact component={FullUserInfo}></Route>
        <Route path='/comments' exact component={Comments}></Route>
        <Route path='/posts' exact component={Posts}></Route>
        <Route path='/users' exact component={Users}></Route>
        <Route path='/' exact render={() => <h1>Home</h1>}></Route>
        <Route exact render={() => <h1>404</h1>}></Route>
      </Switch>

    </div>
  );
}

export default App;
