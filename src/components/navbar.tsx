import React from 'react'

const NavBar = () => {
  return (
    <div className='nav-header p-10 bg-white'>
        <div className="title">
            <h1 className="text-primary text-3xl font-bold">MORENT</h1>
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
                <span className='bleep bg-red rounded-full w-1 h-1'></span>
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
