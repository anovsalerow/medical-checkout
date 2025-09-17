import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import { LINKS } from './constants/constants';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { CheckoutPage } from './pages/CheckoutPage';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path={LINKS.homepage} element={<Main />}>Element Main
            <Route path={LINKS.checkout} element={<CheckoutPage />}/>
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
