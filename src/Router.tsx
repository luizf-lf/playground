import { BrowserRouter } from 'react-router-dom';
import SidebarMenu from './components/SidebarMenu';

function Router() {
  return (
    <BrowserRouter>
      <SidebarMenu />
    </BrowserRouter>
  );
}

export default Router;
