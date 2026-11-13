import React from 'react';
import Header from './Header';
import NoteCard from './NoteCard';
import Footer from './Footer';

function App() {
  return (
    <div className="bg-[#202124] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <NoteCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
