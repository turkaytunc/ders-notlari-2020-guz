import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavigationBar } from './components/navigation-bar/NavigationBar';
import { Footer } from './components/footer/Footer';
import { WelcomePage } from './components/welcome-page/WelcomePage';
import { FormelDiller } from './components/formel-diller/FormelDiller';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-title">Ders Notlari</div>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/formel-diller" component={FormelDiller} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
