import Link from "next/link";
import styles from "../styles/Layout.module.css";
const Layout = (props) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.header}>
        <h1>{props.titulo ?? "Mais um exemplo"}</h1>
        <Link href="/">Voltar</Link>
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Layout;
