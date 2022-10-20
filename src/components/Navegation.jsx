import Link from "next/link";
import styles from "../styles/Navegation.module.css";
const Navegation = (props) => {
  return (
    <Link href={props.destino} passHref>
      <div className={styles.navegador} style={{backgroundColor: props.cor ?? 'dodgerblue'}}>{props.texto}</div>
    </Link>
  );
};

export default Navegation;
