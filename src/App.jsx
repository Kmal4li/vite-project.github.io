import React from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Main Content</h1>
        <p>Selamat datang di aplikasi React ini.</p>
        <p>Ini adalah contoh konten acak dalam komponen utama.</p>
        <ul>
          <li>Poin 1</li>
          <li>Poin 2</li>
          <li>Poin 3</li>
        </ul>
        <p>Terima kasih telah menggunakan aplikasi ini!</p>
        &copy; 2023 Muhammad Akmal Ali. Hak Cipta Dilindungi Undang-Undang.
      </main>
      <Footer />
    </div>
  );
}

export default App;
