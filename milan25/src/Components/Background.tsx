import React, { useState, useEffect, useRef } from 'react';
import backgroundImage from './background.png';
import NavbarLogo from './Navbar.png';
import navimg from './Group42.png';
import heroImage from './SPONSORS.png';
import Group93 from './Group93.png';
import Frame36 from './Frame36.png';
import Group95 from './Group95.png';

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const gridItems = [
  { position: "1", link: '/link1', alt: 'Grid Item 1', items: ['Item 1A', 'Item 1B', 'Item 1C'] },
  { position: "2", link: '/link2', alt: 'Grid Item 2', items: ['Item 2A', 'Item 2B', 'Item 2C'] },
  { position: "3", link: '/link3', alt: 'Grid Item 3', items: ['Item 3A', 'Item 3B', 'Item 3C'] },
  { position: "4", link: '/link4', alt: 'Grid Item 4', items: ['Item 4A', 'Item 4B', 'Item 4C'] },
  { position: "5", link: '/link5', alt: 'Grid Item 5', items: ['Item 5A', 'Item 5B', 'Item 5C'] },
  { position: "6", link: '/link6', alt: 'Grid Item 6', items: ['Item 6A', 'Item 6B', 'Item 6C'] },
];

const gridItems2 = [
  { position: "1", link: '/link1', alt: 'Grid Item 1', items: ['Item 1D', 'Item 1E', 'Item 1F'] },
  { position: "2", link: '/link2', alt: 'Grid Item 2', items: ['Item 2D', 'Item 2E', 'Item 2F'] },
  { position: "3", link: '/link3', alt: 'Grid Item 3', items: ['Item 3D', 'Item 3E', 'Item 3F'] },
  { position: "4", link: '/link4', alt: 'Grid Item 4', items: ['Item 4D', 'Item 4E', 'Item 4F'] },
  { position: "5", link: '/link5', alt: 'Grid Item 5', items: ['Item 5D', 'Item 5E', 'Item 5F'] },
  { position: "6", link: '/link6', alt: 'Grid Item 6', items: ['Item 6D', 'Item 6E', 'Item 6F'] },
];

const Popup: React.FC<{ onClose: () => void; items: string[] }> = ({ onClose, items }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Semi-transparent dark overlay */}
      <div 
        className="fixed inset-0  bg-opacity-30" 
        style={{ backdropFilter: 'blur(2px)' }} 
      />
      {/* Popup content */}
      <div ref={popupRef} className="p-6 rounded-lg shadow-lg border border-gray-200 z-50">
        <h2 className="text-xl font-bold mb-4 text-white">Popup Content</h2>
        <p className="text-white">This is the content of the popup.</p>

        <ul className="list-disc pl-5 mb-4 text-white">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
        {/* <button 
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

const Background: React.FC<BackgroundProps> = ({ className = '' }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupItems, setPopupItems] = useState<string[]>([]);

  const handleGridItemClick = (items: string[]) => {
    setPopupItems(items);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div 
      className={`fixed inset-0 min-h-screen w-full ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#0a0225',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh',
        overflow: 'auto'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0225]/50" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-20 p-4 shadow-md ml-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={NavbarLogo} alt="Logo" className="w-54 h-auto" />
          </div>

          <div className="hidden md:flex space-x-12 text-white font-semibold mr-10">
            <a href="#about" className="hover:text-[#FFFFFF]">ABOUT</a>
            <a href="#services" className="hover:text-[#646cff]">SERVICES</a>
            <a href="#sponsors" className="hover:text-[#646cff]">SPONSORS</a>
            <a href="#team" className="hover:text-[#646cff]">TEAM</a>
            <a href="#timeline" className="hover:text-[#646cff]">TIMELINE</a>
            <a href="#register" className="hover:text-[#646cff]">REGISTER </a>
            <a
              href="#register"
              className="hover:text-[#646cff] text-white font-semibold"
              style={{
                backgroundImage: `url(${navimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '8px 35px',
                borderRadius: '15px',
                top: '-8px',
                position: 'relative'
              }}
            >
              TICKETS
            </a>
          </div>

          <div className="md:hidden">
            {/* Hamburger menu placeholder */}
          </div>
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Hero Image */}
        <div className="pt-32"> {/* Adjusted padding */}
          <img 
            src={heroImage} 
            alt="Hero"
            className="max-w-[80%] md:max-w-[60%] lg:max-w-[50%] h-auto mx-auto"
          />
        </div>

        {/* Current Sponsors Image */}
        <div className="pt-20">
          <img 
            src={Group93} 
            alt="currentsponsors"
            className="max-w-[80%] md:max-w-[60%] lg:max-w-[50%] h-auto mx-auto"
          />
        </div>

        {/* Grid Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {gridItems.map((item, index) => (
              <a 
                key={index}
                href="#"
                onClick={() => handleGridItemClick(item.items)}
                className="relative group transform transition-all duration-300 hover:scale-105 block"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img 
                    src={Frame36}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-20">
          <img 
            src={Group95} 
            alt="currentsponsors"
            className="max-w-[80%] md:max-w-[60%] lg:max-w-[50%] h-auto mx-auto"
          />
        </div>

        {/* Grid Section 2 */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {gridItems2.map((item, index) => (
              <a 
                key={index}
                href="#"
                onClick={() => handleGridItemClick(item.items)}
                className="relative group transform transition-all duration-300 hover:scale-105 block"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img 
                    src={Frame36}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Popup */}
        {isPopupOpen && <Popup onClose={handleClosePopup} items={popupItems} />}
      </div>
    </div>
  );
};

const BackgroundLayout: React.FC<BackgroundProps> = ({ children, className }) => {
  return (
    <Background className={className}>
      <main className="container mx-auto px-4 min-h-screen">
        {children}
      </main>
    </Background>
  );
};

export { Background, BackgroundLayout };