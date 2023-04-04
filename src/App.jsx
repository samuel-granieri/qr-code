// src/App.js
import "./index.css";
import { Routes, Route} from "react-router-dom";
import back_image from './assets/back_image.jpeg'


import PDF from './components/PDF'
import QrCode from './components/QrCode';

export default function App() {
  return (
    
    <div className="container">

      <img className="img_background" src={back_image}/>
      
      <Routes>
          <Route path="/" element={<QrCode />} />
          <Route path="/pdf" element={<PDF />} />
       </Routes>

    </div>
   
    
  );
}