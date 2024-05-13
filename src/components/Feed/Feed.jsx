import './Feed.scss'
import Share from '../Share/Share'
import { Posts } from '~/mockData/mockData'
import Post from '~/components/Post/Post'

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
