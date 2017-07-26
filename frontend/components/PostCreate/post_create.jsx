import React from 'react'
import PostCreateNav from './post_create_nav'
import PostCreateBodyContainer from './post_create_body_container'
import values from 'lodash/values'

class PostCreate extends React.Component {

  componentWillReceiveProps() {

  }

  render() {

    let displayPostCreate = false
    let friendArr = values(this.props.friends)

    friendArr = friendArr.filter((friend) => {
      return friend["sender_id"] === this.props.bios.id || friend["recipient_id"] === this.props.bios.id
    })

    console.log("FRIEND ARRAY", friendArr)

    if (friendArr.length < 1) {
      return <div className="filler-div"> </div>
    } else {
      return (
        <div className={`prof-subcomponent post-create`}>
          <PostCreateNav />
          <PostCreateBodyContainer />
        </div>
      )
    }


  }
}

export default PostCreate
