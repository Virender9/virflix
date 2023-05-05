import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "@/app/styles/navbar.module.css";

const Header = () => {
  return (
    <>
      <header className={style.main_header}>
        <div className={style.logo}>
          <Link href='/'>
            <Image src='/logo.jpeg' alt='virflix' width={200} height={80} />
          </Link>
        </div>
        <nav className={style.navbar_menu}>
          <ul>
            <li>
              <Link href='/' className='nav_link'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className='nav_link'>
                About
              </Link>
            </li>
            <li>
              <Link href='/movie' className='nav_link'>
                Movie
              </Link>
            </li>
            <li>
              <Link href='/contact' className='nav_link'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
