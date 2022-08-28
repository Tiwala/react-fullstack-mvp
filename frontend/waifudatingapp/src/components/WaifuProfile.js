import React, { useState, useEffect } from 'react'

const WaifuProfile = ({waifus}) => {
    const [waifuIndex, setIndex] = useState(0);
    const [currentWaifu, setCurrentWaifu] = useState(waifus[waifuIndex])

    useEffect (() => {
        console.log(currentWaifu);
    }, [currentWaifu])

    const swipe = () => {
        setIndex(waifuIndex => waifuIndex + 1)
        if (waifus[waifuIndex + 1]) {
            setCurrentWaifu(waifus[waifuIndex + 1]);
        } else {
            alert('You have run out of swipes for today! Try again tomorrow!');
        }
    }

    return (
        <div className="profileDiv">
            <img className="currentPhoto" src={currentWaifu.image}/>
            <div className="nameDiv">
                {currentWaifu.name}, {currentWaifu.age}
            </div>
            <div className="aboutDiv">
                {currentWaifu.profile}
            </div>
            <div id="swipeDiv">
                <button onClick={swipe}>swipe</button>
            </div>
        </div>
    )
}

export default WaifuProfile;