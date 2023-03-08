import React from 'react'

const LinkSidebar = ({ linkIcon, text, link }) => {
  return (
    <div>
<div className="sidebar__category">
    <i className='material-icons'>
        {linkIcon}
    </i>
    <span>{text}</span>
</div>
    </div>
  )
}

export {LinkSidebar}