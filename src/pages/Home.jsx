import React from 'react'
import css from './Home.module.css';
import image1 from './img/slide1.png';
import image2 from './img/slide2.png';
import image3 from './img/slide3.png';

export const Home = () => {
  return (
    <div className={css.container}>
      <div className={css.containerImg}>
        <img className={css.img} src={image1} alt="img"  />
      </div>
      <div>
        <img className={css.img} src={image2} alt="img" />
      </div>
      <h1 className={css.title}>Development</h1>
      <h2>Today, we work with such small and large companies as:</h2>
      <p >
        • Novus (UA) <br />• Megamarket (UA) <br />• Ultramarket (UA) <br />•
        Respublika Park (UA) <br />• Gorodok Shopping Center (UA) <br />• Tochka
        Shopping Center (UA) <br />• Ocean Plaza (UA) <br />• Silpo (UA) <br />•
        Al Futtaim Dubai Festival City Mall (AEO) <br />• Dubai Festival Plaza
        (AEO)
      </p>
      <img className={css.img} src={image3} alt="img" />
    </div>
  );
}
