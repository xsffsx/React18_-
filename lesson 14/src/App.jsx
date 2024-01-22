import { useState } from 'react';

// 1. trigger -> render -> commit
// 2. virtual dom： 真实 dom 的一个 js 对象表达
// 3. 快照态的数据
// 4. batchUpdate

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  function handleInnerClick(e) {
    e.stopPropagation();
    alert('inner click');
  }

  return (
    <div onClick={handleClick} style={{color: 'red'}}>
      <p onClick={handleInnerClick}>{count}</p>
    </div>
  )
}

export default App;