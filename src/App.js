import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NotFound from './component/NotFound/NotFound';
import ApartmentDetail from './pages/ApartmentDetail';
import Login from "./pages/Login";
import Home from './pages/Home';
import List from './pages/List';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Upload from './component/Profile/Upload/Upload';
import UserPost from './component/Profile/UserPost/UserPost';
import UserFavorite from './component/Profile/UserFavorite/UserFavorite';
import AdminHost from './component/Profile/AdminHost/AdminHost';
import AdminPost from './component/Profile/AdminPost/AdminPost';
import Join from './component/Socket/Join/Join';

import Chat from "./component/Socket/Chat/Chat";


function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={List} />
          <Route exact path="/posts/:id" component={ApartmentDetail} />
          <Route exact path="/host/login" component={Login} />
          <Route exact path="/renter/login" component={Login} />
          <Route exact path="/admin" component={Login} />
          <Route exact path="/renter/register" component={Register} />
          <Route exact path="/host/register" component={Register} />
          {localStorage.getItem('role') !== null && <Route exact path="/profile" component={Profile} />}
          {localStorage.getItem('role') === 'host' && <Route exact path="/upload/:id" component={Profile} />}
          {localStorage.getItem('role') === 'host' && <Route exact path="/upload" component={Profile} />}
          {localStorage.getItem('role') === 'host' && <Route exact path="/my_posts" component={Profile} />}
          {localStorage.getItem('role') === 'renter' && <Route exact path="/favorite" component={Profile} />}
          {localStorage.getItem('role') === 'admin' && <Route exact path="/approve/host" component={Profile} />}
          {localStorage.getItem('role') === 'admin' && <Route exact path="/approve/post" component={Profile} />}
          <Route exact path="/join" component={Join} />
          <Route exact path="/chat" component={Chat} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;