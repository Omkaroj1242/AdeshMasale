import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Speciality from './components/Speciality';
import Info from './components/Info';
import Products from './components/Products';

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Speciality/>
      <Info/>
      <Products/>
    </>
  );
}

export default App;
