import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import { LINKS } from './constants/constants';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { CheckoutPage } from './pages/CheckoutPage';
import { LoginPage } from './pages/LoginPage';
import { Header } from './components/Header';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./store/slices/authSlice.js";
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path={LINKS.homepage} element={<Main />}>
            <Route path={LINKS.checkout} element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>}/>
            <Route path={LINKS.login} element={<LoginPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
