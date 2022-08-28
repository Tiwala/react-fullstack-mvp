import { useState, useEffect } from 'react';
import Header from './components/Header'
import OwnProfile from './components/OwnProfile'

function App() {
  const [waifus, getWaifus] = useState(

  )

  const [currentProfile, getProfile] = useState(

  )
  
  const [loggedIn, checkLogin] = useState(false);

  useEffect(() => {
    fetch('http://localhost:6969/waifus')
    .then((res) => res.json())
    .then((waifuList) => {
      getWaifus(waifuList)
      console.log(waifuList)
    })
  }, [])

  // useEffect(() => {
  //   fetch('http://localhost:6969/profiles')
  //   .then((res) => res.json())
  //   .then((profileList) => {
  //     getProfile(profileList)
  //     console.log(profileList)
  //   })
  // }, [])
  // if (!waifus) {
  //   fetch('http://localhost:6969/waifus')
  //   .then((res) => res.json())
  //   .then((waifuList) => {
  //     getWaifus(waifuList)
  //   })
  // }

  // if (!currentProfile) {
  //   fetch('http://localhost:6969/profiles')
  //   .then((res) => res.json())
  //   .then((profileList) => {
  //     getProfile(profileList)
  //   })
  // }

  

  const handleLogin = (userName, password) => {
    fetch('http://localhost:6969/profiles')
    .then((res) => res.json())
    .then((profileList) => {
      for (let profile of profileList) {
        if (profile.name === userName && profile.password === password) {
          checkLogin(true);
          getProfile(profile)
          console.log(profile)
        } else {
          alert('Your username/password is incorrect. Please try again')
        }
      }
    })
  }

  // const fetchCurrentWaifu = () => {
  //   fetch('http://localhost:6969/waifus')
  //   .then((res) => res.json())
  //   .then((waifuList) => {
  //     let waifuIndex = 0;

  //     getWaifus(waifuList[waifuIndex])
  //   })
  // }

  return (
    <>
      <Header handleLogin={handleLogin} loggedIn={loggedIn} currentProfile={currentProfile}/>
      <div className='container'>
        {loggedIn ? (
          <OwnProfile currentProfile={currentProfile}/>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default App;
