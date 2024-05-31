import React from 'react';
import './App.css';
import Card from './Card';

function App() {

  return (
    <>
      <div className="App">
        <section className='gallery_sec'>
          <div className='container'>
            <div className='row'>
              <Card />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
