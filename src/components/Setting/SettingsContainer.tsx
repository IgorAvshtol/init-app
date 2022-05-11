import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Header } from './Header';
import { PrivateRoute } from '../Routes/PrivateRoute';
import { Publications } from './Publications';
import { Settings } from './Settings';

export function SettingsContainer() {
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    if (window.scrollY === 0) {
      setScrollingUp(true);
    }
    let prevScroll = window.scrollY;
    const handleScroll = () => {
      const currScroll = window.scrollY;
      const isScrolled = prevScroll > currScroll;
      setScrollingUp(isScrolled);
      prevScroll = currScroll;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Header scrollingUp={scrollingUp} />
      <Routes>
        <Route
          path="/publications"
          element={
            <PrivateRoute>
              <Publications />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}
