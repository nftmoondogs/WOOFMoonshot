// src/pages/index.js
import '../styles/globals.css';
import HeroSection from '../components/HeroSection';
import FooterSection from '../components/FooterSection';
import AboutSection from '../components/AboutSection';
import TokenomicsSection from '../components/TokenomicsSection'; // Ensure this component is created
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  useEffect(() => {
    // Initialize Jupiter Terminal when the window is available
    if (typeof window !== 'undefined' && window.Jupiter) {
      window.Jupiter.init({
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal", // Updated ID for Jupiter Terminal
        endpoint: "https://broken-twilight-voice.solana-mainnet.quiknode.pro/1df760a17b5e9914233e791f8af0db68ae97a247/",
        strictTokenList: false,
        formProps: {
          fixedOutputMint: true,
          initialOutputMint: "WARcU61sECeEK5DEbkY3wcjGxSGr4W8bVUpKbBNbgbu",
        },
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection /> {/* Tokenomics Section */}
      <div id="jupiter-terminal" className="container mx-auto mt-8">
        {/* Jupiter Terminal will be injected here */}
      </div>
      <FooterSection />
    </>
  );
};

export default Home;
