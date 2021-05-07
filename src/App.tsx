import { Route, Switch, useLocation } from 'react-router-dom';

import SidebarMenu from './components/SidebarMenu';
import HomeDial from './pages/HomeDial';
import Clicker from './pages/Clicker';

import './assets/styles/global.scss';
import styles from './assets/styles/pages/app.module.scss';
import { AnimatePresence } from 'framer-motion';

function App() {
  /* 
    The useLocation hook is necessary for the AnimatePresence to detect when a component
      will umount and apply the 'exit' animation. Also, the key prop applied to the switch
  */
  const location = useLocation();
  return (
    <div className={styles.appWrapper}>
      <SidebarMenu />
      <main>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path="/clicker">
              <Clicker />
            </Route>
            <Route path="/">
              <HomeDial />
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
