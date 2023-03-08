import React from 'react'
import {LinkSidebar} from '../../Utils/Components'
import "./Sidebar.scss"
const Sidebar = () => {
  return (
    
    <div className="sidebar">
      <div className="sidebar__categories">
      <div class="sidebar__category">
        <LinkSidebar linkIcon="home" text="home" link="Home"/>
        </div>
        <div class="sidebar__category">
        <LinkSidebar linkIcon="local_fire_department" text="Trending" link="trending"/>
        </div>
        <div class="sidebar__category">
       <LinkSidebar linkIcon="subscriptions" text="Subcriptions" link="subcriptions"/>
       </div>
       <div class="sidebar__category">
        <LinkSidebar linkIcon="library_add_check" text="Library" link="library"/>
        </div>
        <div class="sidebar__category">
        <LinkSidebar linkIcon="history" text="History" link="history"/>
        </div>
        <div class="sidebar__category">
        <LinkSidebar linkIcon="play_arrow" text="Your Videos" link="your Videos"/>
        </div>
        <div class="sidebar__category">
        <LinkSidebar linkIcon="watch_later" text="Watch Later" link="watch Later"/>
        </div>
        <div class="sidebar__category">
        <LinkSidebar linkIcon="lthumb_up" text="Liked Videos" link="liked Videos"/>
        </div>
      </div>
 
    </div>
    
  )
}

export default Sidebar