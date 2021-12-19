import './App.css';
import HomePage from './pages/home';
import { Header, Footer } from './pages/layout';

function App() {
  return ( // 這裡不是html 是jsx xml格式的東東
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
