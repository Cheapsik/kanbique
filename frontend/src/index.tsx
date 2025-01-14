import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Kanbique from './Kanbique.tsx'
import React from 'react'
import './global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Kanbique />
  </StrictMode>,
)
