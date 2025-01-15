import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Kanbique from './Kanbique.tsx'
import React from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css";
import './global.scss';
import "./fontAwesome";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Kanbique />
  </StrictMode>,
)
