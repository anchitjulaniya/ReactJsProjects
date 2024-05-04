import React from 'react';
import styles from '../Hero/Hero.module.css';
import img from '../../Assets/family.jpg';

function Hero() {
  return (
    <div className={styles.container}>
      <img src={img} alt="" className={styles.imgs} />
      <div className={styles.content}>
        <h1>Think Health. Think Massage</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quae earum impedit nihil ratione vitae corporis distinctio aperiam quisquam quia, ducimus tempora, quos inventore reiciendis!</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button1}>Learn More About Us</button>
          <button className={styles.button2}>Contact Us Today</button>
        </div>
      </div>
      <div>
        <h5 className={styles.h5}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, aliquid.</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error ducimus atque repellat molestiae ad, delectus natus eius repudiandae ipsam ab hic iure, repellendus unde ullam nisi dolore aliquid ratione sequi recusandae accusantium. Pariatur voluptates vitae quae laboriosam assumenda placeat aspernatur dolorum officiis ipsum commodi veniam reiciendis a sequi harum <br></br>omnis, culpa nesciunt eaque, praesentium iure doloremque fugit corporis similique iusto natus. Dolores dicta laboriosam earum! Ex numquam, excepturi aliquid nam ducimus nihil ut porro dolore quidem asperiores reiciendis debitis facilis, sequi officia blanditiis expedita! Maiores doloremque facilis nam sed tempora incidunt explicabo, voluptas ad, itaque </p>
      </div>
      <hr className={styles.hr} />
      <hr className={styles.hr} />
      <div className={styles.footer}>
        <h4 style={{color:' rgb(82, 4, 82)', marginBottom:'0'}}>Family Wellness Massage Therapy</h4>
        <p style={{ marginBottom:'0'}}>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
    
  );
}

export default Hero;
