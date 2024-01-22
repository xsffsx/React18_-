// 2. Effect 并不是跟随 render 顺序执行的，二是在 render 执行结束，页面更新之后，再执行的
import { useState } from 'react';
import VideoPlayerTwo from './VideoPlayerTwo';

function App() {
  // 播放状态
  const [isPlaying, setIsPlaying] = useState(false);

  function handleBtnClick() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      <VideoPlayerTwo src="https://media.w3.org/2010/05/sintel/trailer.mp4" isPlaying={isPlaying}/>
      <button onClick={handleBtnClick}>Toggle</button>
    </div>
  )
}

export default App;