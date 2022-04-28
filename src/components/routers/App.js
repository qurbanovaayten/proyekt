import React,{Suspense ,useEffect} from 'react';
import { CartProvider } from 'react-use-cart'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About';
import Contact from '../pages/Contact';
import Nav from '../pages/Nav';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Blog from '../pages/Blog';
import Card from '../pages/Card';
import BlogDetailsPage from '../pages/BlogDetailsPage';
import Footer from '../pages/Footer';
const loadingMarkup=(
    <div className="py-4 text-center">
        <h2>Loading..</h2>
    </div>
)

const AppRouter = () => {
    useEffect(()=>{
        Aos.init({duration:2000 });
      }, []);   
    return (
        <Suspense fallback={loadingMarkup}>
            <BrowserRouter>
        <Switch>
            <CartProvider>
                <Nav/>
                {/* <Routes> */}
                <Route path="/" component={Home} exact></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/card" component={Card}></Route>
                <Route path="/blog" component={Blog}></Route>
                <Route path="/blogs/:id" component={BlogDetailsPage}></Route>
                {/* <Footer/> */}
                {/* </Routes> */}
                <Footer/>
            </CartProvider>
            </Switch>
        </BrowserRouter>
        </Suspense>
    )
}

export default AppRouter