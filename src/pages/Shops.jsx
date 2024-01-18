import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';
import css from './Shops.module.css';

import image1 from './img/Festival-ikia.jpeg';
import image2 from './img/festival-lulu .jpeg';
import image3 from './img/Festival-Plaza.jpeg';
import image4 from './img/Respublika-1.jpeg';
import image5 from './img/Respublika-2.jpeg';
import image6 from './img/Silpo-Vishnya.jpg';
import image7 from './img/Megamarket-Gatne.jpeg';
import image8 from './img/Megamarket-hodosovka.jpeg';
import image9 from './img/no-photo.jpg';
import image10 from './img/no-photo.jpg';
import image11 from './img/no-photo.jpg';
import image12 from './img/no-photo.jpg';
import image13 from './img/no-photo.jpg';
import image14 from './img/no-photo.jpg';
import image15 from './img/no-photo.jpg';

import concept1 from './img/concept1.jpg';
import concept2 from './img/concept2.jpg';
import concept3 from './img/concept3.jpg';
import concept4 from './img/concept4.jpg';
import concept5 from './img/concept5.jpg';
import concept6 from './img/concept6.jpg';
import concept7 from './img/concept7.jpg';
import concept8 from './img/concept8.jpg';
import concept9 from './img/concept9.jpg';
//
const images1 = [
  {
    src: image1,
    title: 'UAE, Dubai, Festival City Mall',
    description: 'Work time: 09:00 - 23:00 7/7',
  },
  {
    src: image2,
    title: 'UAE, Dubai, Festival City Mall',
    description: 'Work time: 09:00 - 23:00 7/7',
  },
  {
    src: image3,
    title: 'UAE, Dubai, Festival Plaza Mall',
    description: 'Work time: 09:00 - 22:00 7/7',
  },
  {
    src: image4,
    title: 'Ukraine, Kyiv, Respublika Park Mall',
    description: 'Work time: 10:00 - 20:00 7/7',
  },
  {
    src: image5,
    title: 'Ukraine, Kyiv, Respublika Park Mall',
    description: 'Work time: 10:00 - 20:00 7/7',
  },
  {
    src: image6,
    title: 'Ukraine, Vyshneve, Silpo',
    description:
      'Evropeyska street, 30, Vyshneve, Kyiv region, Ukraine, 08132, Work time: 10:00 - 20:00 7/7',
  },
  {
    src: image7,
    title: 'Ukraina, Gatne, MegaMarket',
    description:
      'Kyivska street, 2, Gatne, Kyiv region, Ukraine, 08160, Work time: 10:00 - 20:00 7/7',
  },
  {
    src: image8,
    title: 'Ukraine, Khodosivka, MegaMarket',
    description:
      'Dniprovske shosse, 1, 16, Khodosivka, Kyiv region, Ukraine, 08173, Work time: 10:00 - 20:00 7/7',
  },
  {
    src: image9,
    title: 'Ukraine, Vyshneve, NOVUS',
    description:
      'Pershotravneva Street, 26, Vyshneve, Kyiv region, Ukraine, 08132',
  },
  {
    src: image10,
    title: 'Ukraine, Kyiv, Tochka Mall',
    description: 'Oleksandra Dovzhenka Street, 1B, Kyiv, Ukraine, 03057',
  },
  {
    src: image11,
    title: 'Ukraine, Kyiv, NOVUS',
    description: 'Metrologichna Street, 19, Kyiv, Ukraine, 02000',
  },
  {
    src: image12,
    title: 'Ukraine, Kyiv, MegaMarket',
    description: 'Danyla Scherbakivskogo Street, 58, Kyiv, Ukraine, 04111',
  },
  {
    src: image13,
    title: 'Ukraine, Kyiv, Cosmo Multimall',
    description: 'Vadim Hetman Street, 6, Kyiv, Ukraine, 03057',
  },
  {
    src: image14,
    title: 'Ukraine, Kyiv, ULTRAMARKET',
    description: 'Surikova Street, 3a, Kyiv, Ukraine, 02000',
  },
  {
    src: image15,
    title: 'Ukraine, Kyiv, NOVUS',
    description: 'Georgiy Kirpy Street, 5, Kyiv, Ukraine, 02000',
  },
];
//
const images2 = [
  {
    src: concept1,
    title: '',
    description: '',
  },
  {
    src: concept2,
    title: '',
    description: '',
  },
  {
    src: concept3,
    title: '',
    description: '',
  },
  {
    src: concept4,
    title: '',
    description: '',
  },
  {
    src: concept5,
    title: '',
    description: '',
  },
  {
    src: concept6,
    title: '',
    description: '',
  },
  {
    src: concept7,
    title: '',
    description: '',
  },
  {
    src: concept8,
    title: '',
    description: '',
  },
  {
    src: concept9,
    title: '',
    description: '',
  },
];

const Slider = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const nextSlide1 = () => {
    setCurrentIndex1(prevIndex =>
      prevIndex === images1.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide1 = () => {
    setCurrentIndex1(prevIndex =>
      prevIndex === 0 ? images1.length - 1 : prevIndex - 1
    );
  };

  const nextSlide2 = () => {
    setCurrentIndex2(prevIndex =>
      prevIndex === images2.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide2 = () => {
    setCurrentIndex2(prevIndex =>
      prevIndex === 0 ? images2.length - 1 : prevIndex - 1
    );
  };

  const handlers1 = useSwipeable({
    onSwipedLeft: () => nextSlide1(),
    onSwipedRight: () => prevSlide1(),
  });

  const handlers2 = useSwipeable({
    onSwipedLeft: () => nextSlide2(),
    onSwipedRight: () => prevSlide2(),
  });

  const currentImage1 = images1[currentIndex1];
  const currentImage2 = images2[currentIndex2];

  return (
    <div>
      <div>
        {/* <div className={css.sectionContainer}>
          <p className={css.block}>Concept</p>
        </div> */}
        <div {...handlers2} className={css.sliderContainer}>
          <div className={css.sliderContent}>
            <div className={css.slideContainer}>
              <div className={css.sectionContainer}>
                <h2 className={css.block}>Concept</h2>
              </div>
              <img
                src={currentImage2.src}
                alt={currentImage2.title}
                className={css.slide}
                width="800"
                height="500"
                loading="lazy"
              />
              {/* <div className={css.captionContainer}>
              <p className={css.description}>{currentImage.description}</p>
            </div> */}
            </div>
          </div>

          <div className={css.buttonContainer}>
            <button className={`${css.arrow} ${css.prev}`} onClick={prevSlide2}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className={`${css.arrow} ${css.next}`} onClick={nextSlide2}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div {...handlers1} className={css.sliderContainer}>
          <div className={css.sliderContent}>
            <div className={css.slideContainer}>
              <div className={css.captionContainer}>
                <h2 className={css.title}>{currentImage1.title}</h2>
              </div>
              <img
                src={currentImage1.src}
                alt={currentImage1.title}
                className={css.slide}
                width="800"
                height="500"
                loading="lazy"
              />
              <div className={css.captionContainer}>
                <p className={css.description}>{currentImage1.description}</p>
              </div>
            </div>
          </div>

          <div className={css.buttonContainer}>
            <button className={`${css.arrow} ${css.prev}`} onClick={prevSlide1}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className={`${css.arrow} ${css.next}`} onClick={nextSlide1}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
