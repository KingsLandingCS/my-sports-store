// src/App.js
import HeroBanner from './components/HeroBanner';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <>
      <main className="App overflow-hidden">
        <HeroBanner />
        {/* Other components will go here */}
        <FeaturedProducts />
      </main>
    </>
  );
}

export default App;
