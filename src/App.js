import './App.css';

import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {

  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Toaster></Toaster>
      <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
