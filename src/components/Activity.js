import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Activity extends Component {
  render() {
    const user = this.props.content
    return (
      <div style={{
        height: '98px',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '16pt',
        padding: '12px',
        textAlign: 'center',
      }}
      >
        <div style={{ width: '34%' }}>
          <div style={{ height: '50%' }}>글</div>
          <Link
            className="ant-anchor-link-title"
            to={`/members/${user.username}`}
          >
            {user.documentsCount}
          </Link>
        </div>
        <div style={{ width: '33%' }}>
          <div style={{ height: '50%' }}>댓글</div>
          <Link
            className="ant-anchor-link-title"
            to={`/members/${user.username}/comments`}
          >
            {user.commentsCount}
          </Link>
        </div>
        <div style={{ width: '33%' }}>
          <div style={{ height: '50%' }}>좋아요</div>
          <Link
            className="ant-anchor-link-title"
            to={`/members/${user.username}/likes`}
          >
            {user.likedDocumentsCount}
          </Link>
        </div>
      </div>
    )
  }
}

Activity.propTypes = {
  content: PropTypes.object.isRequired,
}

export default Activity
