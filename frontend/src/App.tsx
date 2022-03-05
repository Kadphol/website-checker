import React from 'react';
import logo from './logo.svg';
import './App.css';
import Uploader from './components/uploader/uploader.component';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-sm-8 col-md-6 col-lg-6'>
            <p className='text-muted'><b>Website Checker</b></p>
            <Uploader />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
