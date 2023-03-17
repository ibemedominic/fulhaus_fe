import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import {ProductApp} from './App';
import './assets/css/bootstrap.min.css'
//import './assets/css/agency.min.css'
import './assets/css/bootstrap-rtl.css'
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(<ProductApp />);

