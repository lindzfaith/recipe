import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <a>All recipes</a>
          <a>Sourdough</a>
        </nav>
        <h1>
          Lindsey's <br />
          Baked Goods
        </h1>
        <nav className={styles.nav}>
          <a>About</a>
          <a>Shop</a>
        </nav>
      </div>
      <hr className={styles.line} />
    </header>
  );
};
