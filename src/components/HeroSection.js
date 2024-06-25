import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Add an effect that sets the isMobile state based on the window width
  useEffect(() => {
    const checkIfMobile = () => {
      const match = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(match);
    };

    // Check on mount (componentDidMount)
    checkIfMobile();

    // Add event listener to listen for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup listener on unmount (componentWillUnmount)
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div id="about" className="flex flex-col items-center justify-center min-h-0 bg-black pt-10 pb-10">
      <div className="text-center text-white">
        <h1 className="font-courier text-6xl font-bold mb-4">
          {/* Your content here */}
        </h1>
        {
          isMobile ?
            <img src="https://i.ibb.co/cDpmWxs/woof.png" alt="WOOF Logo" className="inline h-64" />
          :
            <video 
              src="/videos/woof3d.mp4" 
              alt="WOOF Logo" 
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
              loop
              muted
              className="inline h-164"
            />
        }
        <p className="font-courier text-6xl mb-8">WOOF TOKEN launching on Moonshot🌙🟢</p>
        <a href="https://dexscreener.com/solana/8wiy9o7echctg9b6nfwli6fuvan1wjjngnky3baszlat" target="_blank">
  <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Buy on MoonShot🌙🟢</button>
</a>


      </div>
    </div>
  );
}
