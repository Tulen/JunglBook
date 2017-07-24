import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter} from 'react-router-dom';
import LoginPage from './LoginPage/login_page'
import NewsFeed from './NewsFeed/news_feed'
import ProfilePageContainer from './ProfilePage/profile_page_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'


const App = () => (
  <Switch>
    <ProtectedRoute path="/user/:userId" component ={ ProfilePageContainer } />
    <ProtectedRoute path="/feed" component={ NewsFeed } />
    <AuthRoute path="/" component={ LoginPage }/>
  </Switch>

)

export default App
