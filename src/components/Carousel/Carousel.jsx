import React, { Children, cloneElement, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import css from './Carousel.module.css';

const PAGE_WIDTH = 450;

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
 
    setOffset(currentOffset => {
      const newOffset = currentOffset + PAGE_WIDTH;
      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxoffset = -(PAGE_WIDTH * (pages.length - 1));
      console.log(newOffset, maxoffset);
      return newOffset;
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, child =>
        cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        })
      )
    );
  }, [children]);

  return (
    <div className={css.mainContainer}>
      <FaChevronLeft className={css.arrow} onClick={handleLeftArrowClick} />
      <div className={css.window}>
        <div
          className={css.allPagesContainer}
          style={{
            transform: `translateX(${offset}px)`,
            display: 'flex',
          }}
        >
          {pages}
        </div>
      </div>
      <FaChevronRight className={css.arrow} onClick={handleRightArrowClick} />
    </div>
  );
};
