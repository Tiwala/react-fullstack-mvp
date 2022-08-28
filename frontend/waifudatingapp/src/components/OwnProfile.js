import React from 'react'

const OwnProfile = ({currentProfile}) => {
  return (
    <div className="profileDiv">
        <div className="photoDiv">
            <img src={currentProfile.photo}/>
        </div>
        <div className="nameDiv">
            {currentProfile.name}
        </div>
        <div className="profileDiv">
            {currentProfile.about}
        </div>
    </div>
  )
}

export default OwnProfile;