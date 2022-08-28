import React from 'react'
import WaifuProfile from './WaifuProfile'

const OwnProfile = ({currentProfile, startSwiping, swiping, waifus}) => {
  const onClick = () => {
    startSwiping(true);
    console.log(swiping)
  }  

  return (
    <>
    {swiping ? (
        <WaifuProfile waifus={waifus}/>
    ) : (
    <div className="profileDiv">
        {/* <div className="photoDiv"> */}
        <img className="currentPhoto" src={currentProfile.photo}/>
        {/* </div> */}
        <div className="nameDiv">
            {currentProfile.name}
        </div>
        <div className="aboutDiv">
            {currentProfile.about}
        </div>
        <button id="startSwipingBtn" onClick={onClick}>Look 4 Waifus!</button>
    </div>
    )}
    </>
  )
}

export default OwnProfile;