import { HashRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Routes from './Routes';

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Routes />
      </HashRouter>
    </AppProvider>
  );
}

export default App;