import React from 'react'
// import ProfileHeader from '../components/profile/ProfileHeader'
import Notification from '../components/Notification/notifi'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const style = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-white text-white`,
    content: `max-w-[1400px] w-full flex justify-centre`,
    mainContent: `flex-[2] border-r border-l border-black overflow-y-scroll`,
  }

  const notification = () => {
 
    return(
        <div className={style.wrapper}>
        <div className={style.content}>
          <Sidebar initialSelectedIcon={'Notifications'} />
          <div className={style.mainContent}>
           <Notification />
          </div>
          <Widgets />
        </div>
      </div>
    )
}




export default notification