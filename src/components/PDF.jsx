import React from "react";
import {Worker,  Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import pdf from '../assets/suppliers_china.pdf'


export default function AllPages() {

  return ( 
    
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
    {<Viewer fileUrl={pdf}/>}
  </Worker>
    
  );
}
