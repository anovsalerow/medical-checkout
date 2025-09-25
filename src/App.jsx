import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { LINKS } from './constants/constants';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { ShopPage } from './pages/ShopPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
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
            <Route path={LINKS.homepage} element={<HomePage />} />
            <Route path={LINKS.about} element={<AboutPage />} />
            <Route path={LINKS.reviews} element={<ReviewsPage />} />
            <Route path={LINKS.contact} element={<ContactPage />} />
            <Route path={LINKS.shop} element={<ShopPage />} />
            <Route path={LINKS.checkout} element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }/>
            <Route path={LINKS.profile} element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }/>
            <Route path={LINKS.login} element={<LoginPage />} />
            <Route path={LINKS.registration} element={<RegistrationPage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
