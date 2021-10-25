import Services from "./Services";
import Staytuned from "./Staytuned";
import Header from "./Header";
import Pricing from "./Pricing";
import Clients from "./Clients";
import GetinTouch from "./GetinTouch";
import MainTestimonial from "./MainTestimonial";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Pricing />
      <Staytuned />
      <MainTestimonial />
      <Clients />
      <GetinTouch />
      <Footer />
    </div>
  );
};
export default Home;
