import Hello from './Hello';
import Bye from './Bye';

// Pure Component 纯组件
// 1. 职责明确
// 2. 给固定的输入有固定的输出
function App() {
  const status = false;

  return (
    <>
      <Hello show={status} />
      <Bye show={status} />
    </>
  )
}

export default App;