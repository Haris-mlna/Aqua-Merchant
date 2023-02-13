import styles from "../../styles/footer.module.css";
import button from "../../styles/button.module.css";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div className={styles.talk}>
          <h6 className={styles.title}>{`Let's Talk`}</h6>
          <p className={styles.para}>
            Every project starts with a chat. H-Project leads our client
            <br />
            conversations and will be happy to discuss your project. He will
            <br />
            also pull in the right people from the team when needed
          </p>
          <button className={button.contactProject}>
            Tell us about your project
          </button>
        </div>

        <div className={styles.contact}>
          <h6 className={styles.title}>Contact</h6>
          <p className={styles.para}>
            Phone :{" "}
            <a href="" className={styles.info}>
              +6281-386-329-291
            </a>
            <br />
            Email :{" "}
            <a href="" className={styles.info}>
              harismaulanaslm@gmail.com
            </a>
            <br />
            Address : Jl.Keadilan Selatan 1 , Bandung 40292, Indonesia
          </p>
          <div>
            <a href="https://twitter.com/DazzlingBone" className={styles.icon}>
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/haris-maulana-57b06696/"
              className={styles.icon}
            >
              <AiOutlineLinkedin />
            </a>
            <a href="https://wa.me/6281386329291" className={styles.icon}>
              <AiOutlineWhatsApp />
            </a>
            <a
              href="https://www.instagram.com/harismlnaslm/"
              className={styles.icon}
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </div>

        <div className={styles.menu}>
          <h6 className={styles.title}>Menu</h6>
          <Link href={"/"} className={styles.info}>
            Home
          </Link>
          <br />
          <Link href={"/"} className={styles.info}>
            Category
          </Link>
          <br />
          <Link href={"/"} className={styles.info}>
            Dashboard
          </Link>
          <br />
          <Link href={"/"} className={styles.info}>
            About
          </Link>
          <br />
          <Link href={"/"} className={styles.info}>
            Contact
          </Link>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        © 2023 Aqua Merchant || All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
