import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './context/Context'
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
