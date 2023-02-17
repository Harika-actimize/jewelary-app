import Sidebar from './navbar';
import Coursol from './coursol';
import Banner from './banner';
import Footer from './footer';
import NavbarDarkExample from './navigation';
import Category from './Category';
import AddPost from './favorites';
import Shopnow from './shopnow';
import Bannerice from './banner2';
import Product from './productslider';

function Home() {
    return (
        <div>
          <Sidebar/>
          <NavbarDarkExample/>
          <Coursol/>
          <AddPost/>
          <Banner/> 
          
          <Category/>
          <Bannerice/>
          <Product/>
          <Shopnow/>
          <Footer/>
        </div>
    );
  }
  
  export default Home;
