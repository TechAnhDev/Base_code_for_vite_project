import TopBar from '~/components/topBar/TopBar'
import SideBar from '~/components/SideBar/SideBar'
import Feed from '~/components/Feed/Feed'
import './Home.scss'
import RightBar from '~/components/RightBar/RightBar'
function Home() {
  return (
    <div style={{ marginTop: '60px' }}>
      <TopBar />
      <div className="homecontainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  )
}

export default Home
