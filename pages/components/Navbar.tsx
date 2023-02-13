import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, FC } from "react";

import styles from "../../styles/navbar.module.css";
import button from "../../styles/button.module.css";
import { AiOutlineClose, AiOutlineMenu, AiOutlineCaretDown } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar: FC = () => {
  const menuHandler = () => {
    if (document) {
      const sidebar = document.querySelector<HTMLElement>("#sidebar");
      if (sidebar) {
        if (sidebar.style.top === "" || sidebar.style.top === "-100%") {
          sidebar.style.top = "0px";
        } else {
          sidebar.style.top = "-100%";
        }
      }
    }
  };

  const closeSidebar = () => {
    if (document) {
      const sidebar = document.querySelector<HTMLElement>("#sidebar");
      if (sidebar) {
        if (sidebar.style.top === "0px") {
          sidebar.style.top = "-100%";
        }
      }
    }
  };

  const dropdown = () => {
    if (document) {
      const dropdown = document.querySelector<HTMLElement>("#dropdownoption");
      if (dropdown) {
        if (dropdown.style.width === "0px" || dropdown.style.width === '') {
          dropdown.style.width = "100%";
          dropdown.style.height = '100%';
          console.log('work')
        } else {
          dropdown.style.width = '0px'
          dropdown.style.height = '0px'
          console.log('failde')
        }
      }
    }
  }

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
          <div>
            <button className={button.emptyMini}>
              <Image
                src={"/assets/interfaces/mail.png"}
                width={25}
                height={25}
                alt="messages"
              />
            </button>
            <button className={button.emptyMini}>
              <Image
                src={"/assets/interfaces/bell.png"}
                width={25}
                height={25}
                alt="notification"
              />
            </button>
            <button className={button.emptyMini}>
              <Image
                src={"/assets/interfaces/shopping-cart.png"}
                width={25}
                height={25}
                alt="carts"
              />
            </button>
          </div>
          <button
            className={button.menu}
            onClick={() => {
              menuHandler();
            }}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </nav>
      <div className={styles.miniNav}>
        <div className={styles.categories_container}>
          <button className={button.categories}>All</button>
          <button className={button.categories}>Fashion</button>
          <button className={button.categories}>Smartphone</button>
          <button className={button.categories}>Luxury</button>
          <button className={button.categories}>Man</button>
          <button className={button.categories}>Woman</button>
        </div>
      </div>
      <div className={styles.sidebar} id="sidebar">
        <button
          onClick={() => {
            closeSidebar();
          }}
          className={button.close}
        >
          <AiOutlineClose />
        </button>

        <div className={styles.sideNavigation}>
          <Link href={"/"} className={button.sidebarNav}>
            Home
          </Link>
          <Link href={"/about"} className={button.sidebarNav}>
            About
          </Link>
          <button className={button.sidebarNav} onClick={() => {
            dropdown();
          }}>
            Category{" "}
            <span className={button.dropdownArrow}>
              <AiOutlineCaretDown />
            </span>
          </button>
          <div className={button.dropdownOption} id='dropdownoption'>
            <Link href={"/product/category"} className={button.sidebarNav}>
            All
            </Link>
            <Link href={"/product/category/fashion"} className={button.sidebarNav}>
            Fashion
            </Link>
            <Link href={"/product/category/smartphone"} className={button.sidebarNav}>
            Smartphone
            </Link>
            <Link href={"/product/category/watches"} className={button.sidebarNav}>
            Luxury
            </Link>
            <Link href={"/product/category/man"} className={button.sidebarNav}>
            Man
            </Link>
            <Link href={"/product/category/woman"} className={button.sidebarNav}>
            Woman
            </Link>
          </div>
          <Link href={"/login"} className={button.sidebarNav}>
            Login
          </Link>
          <Link href={"/register"} className={button.sidebarNav}>
            Register
          </Link>
          <div className={styles.iconMenu}>
            <button className={button.emptyMiniC}>
              <Image
                src={"/assets/interfaces/mail.png"}
                width={25}
                height={25}
                alt="messages"
              />
            </button>
            <button className={button.emptyMiniC}>
              <Image
                src={"/assets/interfaces/bell.png"}
                width={25}
                height={25}
                alt="notification"
              />
            </button>
            <button className={button.emptyMiniC}>
              <Image
                src={"/assets/interfaces/shopping-cart.png"}
                width={25}
                height={25}
                alt="carts"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
