import Image from "next/image";
import MyButton from "./Componenets/Mybutton/ToDo";
import styles from "./page.module.scss";
import ToDo from "./Componenets/Mybutton/ToDo";

export default function Home() {
  return (
    <div className={styles.myContainer} >
      <ToDo />
    </div>
  );
}
