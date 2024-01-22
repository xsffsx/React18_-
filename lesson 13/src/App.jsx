import { useState } from 'react';

function App() {
  const [ userInfo, setUserInfo ] = useState(['dell']);

  const handleClick = () => {
    const newUserInfo = [...userInfo];
    newUserInfo[0] = 'lee';
    setUserInfo(newUserInfo);
  }

  return (
    <div onClick={handleClick}>{userInfo[0]}</div>
  )
}

export default App;