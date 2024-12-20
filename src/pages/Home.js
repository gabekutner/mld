import React from 'react';
// import Clients from '../components/Clients';
// import Cta from '../components/Cta';
// import Footer from '../components/Footer';
import Hero from '../components/Hero';
// import Calendar from '../components/Calendar';
// import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Carousel from '../components/Carousel';
import About from '../components/About';


const Home = () => {
    return (
        <>
            <Hero />
            <Carousel />
            <About />
            {/* <Calendar /> */}
            <Services />
            {/* <Portfolio /> */}
            {/* <Clients /> */}
            {/* <Cta/> */}
            {/* <Footer /> */}
        </>
    )
}

export default Home;

