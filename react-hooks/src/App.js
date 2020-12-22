import React, { useState } from 'react';
// import Counter from './Counter/Counter';
// import Info from './Info/Info';
import Average from './Average/Average';

function App() {
  // const [visible, setVisible] = useState(false);

  return (
    // <Counter />
    // <div>
    //   <button onClick={() => setVisible(!visible)}>
    //     {visible ? '숨기기' : '보이기'}
    //   </button>
    //   <hr/>
    //   {visible && <Info />}
    // </div>
    <Average />
  );
}

export default App;
