import React from 'react'
import NavBarContainer from '../nav_bar_container'
import PostCreate from '../post_create'
import NewsFeedList from './news_feed_list'

class NewsFeed extends React.Component {
  render() {
     return(
       <div>
         <NavBarContainer />
           <div id="news-feed">
            <PostCreate />
            <NewsFeedList />
           </div>
       </div>

    )
  }
}

export default NewsFeed
