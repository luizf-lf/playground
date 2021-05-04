import { BrowserRouter, Route } from 'react-router-dom';

import SidebarMenu from './components/SidebarMenu';
import HomeDial from './components/HomeDial';

import './assets/styles/global.scss';
import styles from './assets/styles/app.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.appWrapper}>
        <SidebarMenu />
        <main>
          <Route exact path="/" component={HomeDial} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
