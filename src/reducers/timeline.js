import { mergeObject } from '../lib'

const timeline = (state = [], action) => {
  switch (action.type) {
    case 'SETTIMELINE':
      return action.timeline
    case 'APPENDTIMELINE':
      return [
        ...state,
        ...action.timeline,
      ]
    case 'APPENDFEED':
      return Object.values([action.feed, ...state])
    case 'UPDATEFEED':
      return state.map((feed) => {
        if (feed.id === action.feed.id) {
          return mergeObject(feed, action.feed)
        }
        return feed
      })
    case 'APPENDCOMMENT':
      return state.map((feed) => {
        if (feed.id === action.comment.rootDocument.id)
          feed.comments.push(action.comment)
        return feed
      })
    default:
      return state
  }
}

// export { timeline as default }
export default timeline
