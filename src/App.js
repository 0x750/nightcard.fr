import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
