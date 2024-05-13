import './Post.scss'
import MoreVert from '@mui/icons-material/MoreVert'
import { Users } from '~/mockData/mockData'
import { useState } from 'react'
import Avatr4 from '~/assets/person/10.jpeg'
import Like from '~/assets/like.png'
import Heart from '~/assets/heart.png'
import PostPT from '~/assets/post/7.jpeg'

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Avatr4} alt="" />
            <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PostPT} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={Like} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={Heart} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
