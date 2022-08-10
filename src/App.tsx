import { useRef } from 'react';
import './App.css';
import ScrollableBox, { ScrollableRef } from './ScrollableBox';


function App() {

  const boxRef = useRef<ScrollableRef>(null)

  return (
    <div className="App">
      <ScrollableBox ref={boxRef} width={120} height={120}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </ScrollableBox>
      { /* @ts-ignore */}
      <button onClick={()=> boxRef.current?.scrollToBottom()}>
        descer
      </button>
    </div>
  );
}

export default App;
