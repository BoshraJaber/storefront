import './App.css';
import Header from './components/ header/ header';
import Footer from './components/ footer/ footer';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
import Cart from './components/cart/simplecart'

function App() {
  return (
    <>
    <Header/>
    <Categories/>
    <Cart />
    <Products/>
   
    <Footer/>
    </>
  );
}

export default App;
