import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <a href="#">
          <Image src={"/Images/logo.webp"} alt="Logo" width={216} height={34} />
        </a>
        <ul className={styles.navUlItems}>
          <li
            className={router.asPath == "/" ? styles.navliActive : styles.navLi}
          >
            <Link href="/" title="How It Works">
              How It Works
            </Link>
          </li>
          <div className={styles.starItem}>
            <div className={styles.starDiv}>⚡</div>
            <li
              className={
                router.asPath == "/marketplace"
                  ? styles.navliActive
                  : styles.navLi
              }
            >
              <Link href="/marketplace">Marketplace</Link>
            </li>
          </div>
          <div className={styles.starItem}>
            <div className={styles.starDiv}>⚡</div>
            <li
              className={
                router.asPath == "/challenges"
                  ? styles.navliActive
                  : styles.navLi
              }
            >
              <Link href="/challenges">Challenges</Link>
            </li>
          </div>
        </ul>
        <div className={styles.navBtns}>
          <div className={styles.btnsWrapper}>
            <a className={styles.LoginBtn} href="/login/">
              Log In
            </a>
            <div style={{ display: "flex" }}>
              <a className={styles.SignupBtn} href="/signup/">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
