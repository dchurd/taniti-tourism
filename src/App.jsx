import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Routes from './Routes';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;