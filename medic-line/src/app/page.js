import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
      <div className={styles.page}>
        <Navbar />
        <div>
          <h1 style={{ color: "darkblue" }}>MedicLine</h1>
        </div>
      </div>
  );
}