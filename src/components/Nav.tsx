import Logo from "./../img/logo.svg";
import Button from "./Button";
import { useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="container relative mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="flex hidden space-x-6 md:flex">
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          <div className="hidden md:block">
            <Button text="Get Started" />
          </div>

          <button
            className={`${styles.hamburger} block focus:outline-none md:hidden ${open ? styles.open : ""}`}
            id="menu-btn"
            onClick={handleClick}
          >
            <span className={styles.hamburgerTop}></span>
            <span className={styles.hamburgerMiddle}></span>
            <span className={styles.hamburgerBottom}></span>
          </button>

          <div
            id="menu"
            className={
              !open
                ? "hidden"
                : "absolute right-0 top-6 mt-10 flex w-screen flex-col items-center space-y-6 self-end self-center bg-white py-8 font-bold drop-shadow-md "
            }
          >
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
