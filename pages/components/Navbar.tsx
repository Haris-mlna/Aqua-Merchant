import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/navbar.module.css";
import button from "../../styles/button.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.ltNav}>
          <a href={"/"} className={styles.logo}>
            <Image
              src={"/assets/images/logo/Logo - Prototype.png"}
              width={75}
              height={75}
              alt="logo"
              className={styles.logoImg}
            />
            <p className={styles.logo_Words}>Aqua Merchant</p>
          </a>
        </div>
        <div className={styles.mdNav}>
          <input
            type="text"
            placeholder="Find your items..."
            className={styles.searchbar}
          />
        </div>
        <div className={styles.rtNav}>
          <button className={button.userNav}>
            <div className={styles.containerUser}>
              <Image
                src={"/assets/interfaces/user.png"}
                width={32}
                height={32}
                alt="user"
              />
            </div>
            <span className={styles.userName}>Profile</span>
          </button>
          <button className={button.empty}>
            <Image
              src={"/assets/interfaces/Menu - Prototype.png"}
              width={35}
              height={35}
              alt="Menu"
            />
          </button>
        </div>
      </nav>
      <div className={styles.miniNav}>
        <div className={styles.categories_container}>
            <button className={button.categories}>All</button>
            <button className={button.categories}>Fashion</button>
            <button className={button.categories}>Smartphone</button>
            <button className={button.categories}>Watches</button>
            <button className={button.categories}>Man</button>
            <button className={button.categories}>Woman</button>
        </div>
        <div>
            <button className={button.emptyMini}>
                <Image src={'/assets/interfaces/mail.png'} width={25} height={25} alt='messages'/>
            </button>
            <button className={button.emptyMini}>
                <Image src={'/assets/interfaces/bell.png'} width={25} height={25} alt='notification'/>
            </button>
            <button className={button.emptyMini}>
                <Image src={'/assets/interfaces/shopping-cart.png'} width={25} height={25} alt='carts'/>
            </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
