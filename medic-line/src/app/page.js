import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
      <div className={styles.page}>
        <Navbar />
        <div>
          <h1 style={{ color: "darkblue" }}>MedicLine</h1>
            <button><Link href="/login">Log In</Link></button>
            <button><Link href="/register-specialist">Register Specialist</Link></button>
            <button><Link href="/register">Register</Link></button>
        </div>
      </div>
  );
}