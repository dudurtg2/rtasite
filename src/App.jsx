import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Fruits from './test/pagina';
import Button1 from './test/button';
import Multi from './test/mult';

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>Este é o conteúdo principal.</p>
        <Fruits />
        <Button1 />
        <Multi />
      </main>
      <Footer />
    </div>
  );
}

export default App;
