import React from 'react'

const NavBar = () => {
  return (
    <div className='nav-header'>
        <div className="title">
            <h1>MORENT</h1>
        </div>

        <div className="search">
            <div className="custom-search-bar">
                <div className="serach-ico">

                </div>
                <input type="text" />
                <div className="filter-ico">

                </div>
            </div>
        </div>

        <div className="options">
            <div className="favourites">

            </div>
            <div className="notifications relative">

            </div>
            <div className="settings">

            </div>
            <div className="profile">
                <img src="" alt="" className="profile-pic" />
            </div>
        </div>

    </div>
  )
}

export default NavBar
