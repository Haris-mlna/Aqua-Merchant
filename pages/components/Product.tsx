import style from "../../styles/Home.module.css";
import Image from "next/image";
import Layout from "./Layout";

const Product = ({ product }: any) => {
  return (
    <div className={style.containerProduct}>
      <div className={style.card}>
        <Layout >
            
        </Layout>
        <h2 className={style.titleCard}>{product}</h2>
        <Image
          src={`/assets/images/card/Card-${product}.png`}
          width={525}
          height={717.62}
          unoptimized={true}
          priority
          alt={`${product}`}
          className={style.cardImage}
        />
      </div>
      <div className={style.productList}>
        <div className={style.product}></div>
        <div className={style.product}></div>
        <div className={style.product}></div>
        <div className={style.product}></div>
      </div>
      <button className={style.nextBtn}>See More</button>
    </div>
  );
};

export default Product;
