import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Hero1 from "../components/Hero1";
import Clients from "../components/Clients";
import Community from "../components/Community";
import Unlock from "../components/Unlock";
import Achievement from "../components/Achievement.jsx";
import Calendar from "../components/Calendar.jsx";
import Customers from "../components/Customers.jsx";
import CommunityUpdates from "../components/CommunityUpdates.jsx";
import AboveFooter from "../components/AboveFooter.jsx";
import Footer from "../components/Footer.jsx";
const Home = () => {
  return (
    <div className="home">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={10000}
        stopOnHover={false}
        swipeable={true}
      >
        <Hero1 />
        <Hero2 />
        <Hero3 />
      </Carousel>
      <Clients/>
      <Community/>
      <Unlock/>
      <Achievement/>
      <Calendar/>
      <Customers/>
      <CommunityUpdates/>
      <AboveFooter/>
      <Footer/>
    </div>
  )
}

export default Home