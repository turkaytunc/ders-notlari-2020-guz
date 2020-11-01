import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavigationBar } from './components/navigation-bar/NavigationBar';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-title">Ders Notlari</div>
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
