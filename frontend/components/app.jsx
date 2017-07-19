import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter} from 'react-router-dom';
import LoginPage from './LoginPage/login_page'
import NewsFeed from './NewsFeed/news_feed'
import ProfilePage from './ProfilePage/profile_page'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
// AuthRoute and ProtectedRoute causing redirect bugs?

const App = () => (
  <Switch>
    <Route path="/user" component ={ ProfilePage } />
    <ProtectedRoute path="/feed" component={ NewsFeed } />
    <AuthRoute path="/" component={ LoginPage }/>
  </Switch>

)

export default App
