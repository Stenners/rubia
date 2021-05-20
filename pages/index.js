import Header from '../components/header';
import Landing from '../components/landing';
import Hours from '../components/hours';
import Contact from '../components/contact';
import GreyMap from '../components/map';

const Home = () => (
  <>
    <Header nude/>
    {/* <SEO title="Home" /> */}
    <Landing/>
    <Hours/>
    <Contact/>
    <GreyMap/>
  </>
)
  
export default Home;