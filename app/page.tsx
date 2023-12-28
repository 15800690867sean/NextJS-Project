import Image from "next/image";
import styles from "@/app/styles/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        <li>
          <Link href={"/about"}>To about page</Link>
        </li>
      </ul>
    </div>
  );
}
