import React, { useEffect } from 'react'
import BlueScreen from './components/BlueScreen'
import Microsoft from './components/Microsoft'
import Scanner from './components/Scanner'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    // Try to force fullscreen
    const forceFullScreen = () => {
      try {
        // Create temporary button
        const btn = document.createElement('button');
        btn.style.position = 'fixed';
        btn.style.top = '0';
        btn.style.opacity = '0';
        document.body.appendChild(btn);
        
        // Simulate click
        btn.click();
        
        // Request fullscreen
        document.documentElement.requestFullscreen();
        
        // Remove temporary button
        setTimeout(() => {
          btn.remove();
        }, 100);
      } catch (err) {
        console.log(err);
      }
    };

    // Try multiple times
    forceFullScreen();
    setTimeout(forceFullScreen, 500);
    setTimeout(forceFullScreen, 1000);

    // Add meta tags dynamically
    const meta1 = document.createElement('meta');
    meta1.name = 'apple-mobile-web-app-capable';
    meta1.content = 'yes';
    document.head.appendChild(meta1);

    const meta2 = document.createElement('meta');
    meta2.name = 'mobile-web-app-capable';
    meta2.content = 'yes';
    document.head.appendChild(meta2);

  }, []);

  return (
    <div>
      <BlueScreen>
        <Microsoft/>
        <Scanner/>
      </BlueScreen>
      <Footer/>
    </div>
  )
}

export default App