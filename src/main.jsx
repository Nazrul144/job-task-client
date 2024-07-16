import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import toast, { Toaster } from 'react-hot-toast';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='lg:w-11/12 mx-auto'>
     <RouterProvider router={router} />
     <Toaster />
     </div>
  </React.StrictMode>,
)
