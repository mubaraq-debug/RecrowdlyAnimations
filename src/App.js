import './App.css';
import Showcase from './Showcase';
import Advert from './Advert';
import Pricing from './Pricing';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Footnote from './Footnote';


function App() {
  return (
   <>
      {/* recrowdly landing page grouped into sections with descriptive section-headers */}
      <Showcase /> 
      <Advert /> 
      <Pricing />
      <Portfolio />
      <Footer />
      <Footnote />
  
   </>
  );
}

export default App;
