import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TostBox } from './Toast/Toast';
import 'react-toastify/dist/ReactToastify.css';
import Layoyt from './Layoyt/Layoyt';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';

import css from './index.module.css';
import Slider from 'pages/Shops';
import SliderCH from 'pages/SliderCH';
export const App = () => {
  return (
    <div className={css.container}>
      <TostBox />
      <Routes>
        <Route path="/" element={<Layoyt />}>
          <Route index element={<Home />} />
          <Route path="/slider-CH" element={<SliderCH />} />
          <Route path="/presentation-CH" element={<Slider />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};
