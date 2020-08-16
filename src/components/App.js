import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function App() {
  return (
    <div>
      <Header />

      {notes.map(newEntry => (
        <Note
          key={newEntry.id}
          title={newEntry.title}
          content={newEntry.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
