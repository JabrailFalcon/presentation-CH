import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './Layoyt.module.css';

const Layoyt = () => {
  // const [burgerModalOpen, setBurgerModalOpen] = useState(false);

  // const handleBurgerClick = isOpen => {
  //   setBurgerModalOpen(isOpen);
  // };

  return (
    <div className={css.filmsTrending}>
      <header className={css.container}>
        {/* <BurgerModal handleBurgerClick={handleBurgerClick} /> */}
        <nav>
          <ul>
            <li className={css.hideOnMobile}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/"
              >
                CH mobile
              </NavLink>
            </li>
            <li className={css.hideOnMobile}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/presentation-CH"
              >
                Our Shops
              </NavLink>
            </li>
            <li className={css.hideOnMobile}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/slider-CH"
              >
                Products
              </NavLink>
            </li>
            <li className={css.hideOnMobile}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${css.active} ${css.contacts}`
                    : `${css.headerLink} ${css.contacts}`
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main
      // className={`${burgerModalOpen ? css.overlay : ''} ${css.mainContent}`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layoyt;
