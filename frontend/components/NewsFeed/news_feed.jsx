import React from 'react'
import NavBarContainer from '../nav_bar_container'
import PostCreate from '../PostCreate/post_create'
import NewsFeedListContainer from './news_feed_list_container'

class NewsFeed extends React.Component {
  render() {
     return(
       <div>
         <NavBarContainer />
           <div id="news-feed">
            <PostCreate />
            <NewsFeedListContainer />
           </div>
       </div>

    )
  }
}

export default NewsFeed
