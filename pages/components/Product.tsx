import { useEffect } from "react";
import style from "../../styles/Home.module.css";
import Image from "next/image";
import Layout from "./Layout";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = ({ product }: any) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const durationInc = 50;

  return (
    <div className={style.containerProduct}>
      <div
        className={style.card}
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <Layout></Layout>
        <h2 className={style.titleCard}>{product}</h2>
        <Image
          src={`/assets/images/card/Card-${product}.png`}
          unoptimized={true}
          layout='fill'
          priority
          alt={`${product}`}
          className={style.cardImage}
        />
      </div>
      <div className={style.productList}>
        <div
          className={style.product}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        ></div>
        <div
          className={style.product}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        ></div>
        <div
          className={style.product}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        ></div>
        <div
          className={style.product}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        ></div>
      </div>
      <button className={style.nextBtn}>See More</button>
    </div>
  );
};

export default Product;
