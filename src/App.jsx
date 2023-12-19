// Styles
import './App.css';

// React Router Dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// React Components
import { Home } from './Components/Home';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { PostPage } from './Components/PostPage';
import GoToTop from './Components/GoToTop';
import { About } from './Components/About';
import Login from './Components/Login';

// React Context
import { UserStorage } from './UserContext';
import { AccountUser } from './Components/AccountUser';

// React Custom Helpers
import { ProtectedRoutes } from './helpers/ProtectedRoutes';
import { Vendas } from './Components/Vendas';
import { Locacao } from './Components/Locacao';
import { Simulacao } from './Components/Simulacao';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/imovel/:id" element={<PostPage />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/account/*" element={<ProtectedRoutes><AccountUser /></ProtectedRoutes>} />
            <Route path="/vendas" element={ <Vendas /> } />
            <Route path="/locacao" element={ <Locacao /> } />
            <Route path="/simulacao" element={ <Simulacao /> } />
          </Routes>
          <Footer />
          <GoToTop />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
