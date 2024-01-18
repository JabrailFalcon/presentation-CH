import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';
import css from './Shops.module.css';

import image1 from './img/imgProducts/img1.jpg';
import image2 from './img/imgProducts/img2.jpg';
import image3 from './img/imgProducts/img3.jpg';
import image4 from './img/imgProducts/img4.jpg';
import image5 from './img/imgProducts/img5.jpg';
import image6 from './img/imgProducts/img6.jpg';
import image7 from './img/imgProducts/img7.jpg';
import image8 from './img/imgProducts/img8.jpg';
import image9 from './img/imgProducts/img9.jpg';
import image10 from './img/imgProducts/img10.jpg';
import image11 from './img/imgProducts/img11.jpg';
import image12 from './img/imgProducts/img12.jpg';
import image13 from './img/imgProducts/img13.jpg';
import image14 from './img/imgProducts/img14.jpg';


const images = [
  {
    src: image1,
    title: 'Car charger',
    description: '',
    price: ' 89 - 489 AED',
  },
  {
    src: image2,
    title: 'Magnetic wallet for case',
    description: '',
    price: ' 99 - 199 AED',
  },
  {
    src: image3,
    title: 'Strap for watch',
    description: '',
    price: ' 69 - 249 AED',
  },
  {
    src: image4,
    title: 'Case for phone',
    description: 'Skinarma',
    price: ' 149 - 249 AED',
  },
  {
    src: image5,
    title: 'Stabilazor',
    description: '',
    price: ' 149 - 789 AED',
  },
  {
    src: image6,
    title: 'Powerbank',
    description: '',
    price: ' 99 - 399 AED',
  },
  {
    src: image7,
    title: 'Screen protector',
    description: '',
    price: ' 50 - 220 AED',
  },
  {
    src: image8,
    title: 'Case for phone',
    description: 'Skinarma',
    price: ' 149 - 249 AED',
  },
  {
    src: image9,
    title: 'Tripod',
    description: '',
    price: ' 79 - 199 AED',
  },
  {
    src: image10,
    title: 'Home Charger',
    description: 'Опис 10',
    price: '69 - 349 AED',
  },
  {
    src: image11,
    title: 'Camera protector',
    description: '',
    price: ' 49 - 129 AED',
  },
  {
    src: image12,
    title: 'Cable',
    description: '',
    price: ' 39 - 189 AED',
  },
  {
    src: image13,
    title: 'Case for phone',
    description: 'Pitaka',
    price: ' 349 AED',
  },
  {
    src: image14,
    title: 'Case for phone',
    description: 'Pitaka',
    price: ' 349 AED',
  },
];

const SliderCH = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  const currentImage = images[currentIndex];

  return (
    <div {...handlers} className={css.sliderContainer}>
      <div className={css.sliderContent}>
        <div className={css.slideContainer}>
          <div className={css.captionContainer}>
            <h2 className={css.title}>{currentImage.title}</h2>
          </div>
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className={css.slide}
            width="800"
            height="800"
            loading="lazy"
          />
          <div className={css.price}>
            <p className={css.description}>{currentImage.description}</p>
            <p className={css.description}>Price:{currentImage.price}</p>
          </div>
        </div>
      </div>

      <div className={css.buttonContainer}>
        <button className={`${css.arrow} ${css.prev}`} onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={`${css.arrow} ${css.next}`} onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default SliderCH;


