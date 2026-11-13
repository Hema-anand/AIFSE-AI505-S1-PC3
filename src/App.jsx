import Header from "./dev/components/Header";
import NoteCard from "./dev/components/NoteCard";
import Footer from "./dev/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#202124] text-white flex flex-col">
      <Header />

      <main className="flex-1 px-5 py-5">
          <NoteCard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
