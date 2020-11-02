import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavigationBar } from './components/navigation-bar/NavigationBar';
import { Footer } from './components/footer/Footer';
import { WelcomePage } from './components/welcome-page/WelcomePage';
import { FormelDiller } from './components/formel-diller/FormelDiller';
import { MobilUygulama } from './components/mobil-uygulama/MobilUygulama';

function App() {
  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <div className="route-container">
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/formel-diller" component={FormelDiller} />
            <Route path="/mobil-uygulama" component={MobilUygulama} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
