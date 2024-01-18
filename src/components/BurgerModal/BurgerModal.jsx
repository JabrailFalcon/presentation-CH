import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaBars } from 'react-icons/fa';
import css from './BurgerModal.module.css';

const BurgerModal = ({ handleBurgerClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 768 && isOpen) {
      setIsOpen(false);
      handleBurgerClick(false);
    }
  }, [isOpen, handleBurgerClick]);

  const handleItemClick = useCallback(
    event => {
      if (modalRef.current && modalRef.current.contains(event.target)) {
        return;
      }

      setIsOpen(false);
      handleBurgerClick(false);
    },
    [modalRef, handleBurgerClick]
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleItemClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleItemClick);
    };
  }, [isOpen, handleResize, handleItemClick, modalRef]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`${css.burgerIcon} ${isOpen ? css.open : ''}`}
        onClick={event => {
          event.stopPropagation();
          setIsOpen(prevIsOpen => !prevIsOpen);
        }}
      >
        <FaBars size={30} />
      </div>
      <div
        ref={modalRef}
        className={`${css.modalContainer} ${isOpen ? css.open : ''}`}
      >
        <ul className={css.menuList}>
          <li
            className={css.menuItem}
            onClick={event => handleItemClick(event)}
          >
            <a href="/">CH mobile</a>
          </li>
          <li
            className={css.menuItem}
            onClick={event => handleItemClick(event)}
          >
            <a href="/presentation-CH">Development</a>
          </li>
          <li
            className={css.menuItem}
            onClick={event => handleItemClick(event)}
          >
            <a href="/slider-CH">slider-CH</a>
          </li>
          <li
            className={css.menuItem}
            onClick={event => handleItemClick(event)}
          >
            <a href="/contacts">Contacts</a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className={css.overlay}
          onClick={event => handleItemClick(event)}
        />
      )}
    </>
  );
};

export default BurgerModal;
