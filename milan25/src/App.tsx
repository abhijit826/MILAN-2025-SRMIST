// import React from 'react';
import { Background, BackgroundLayout } from './Components/Background';

function App() {
  return (
    <Background>
    <BackgroundLayout>
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg text-gray-300">
          This is a sample content with the hexagon background
        </p>
      </div>
    </BackgroundLayout>
    </Background>
  );
}

export default App;