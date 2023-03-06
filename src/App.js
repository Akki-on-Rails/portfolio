import React from 'react';
import Background from './components/background';
import SideMenu from './components/sideMenu'
import About from './components/about'

import styles from './styles/App.scss';

function App() {
  return (
    <div>
      <body>
        <Background />
        <SideMenu />
        <About />
      </body>
    </div>
  );
}

export default App;
