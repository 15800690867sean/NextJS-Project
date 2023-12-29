import Image from "next/image";
import styles from "@/app/styles/page.module.css";
import Link from "next/link";

export default function Home() {
  const clients = [
    { id: "first", name: "First" },
    { id: "second", name: "Second" },
  ];

  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        <li>
          <Link href={"/about"}>To about page</Link>
        </li>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={`/clients/${client.name}`}
            >{`To Client ${client.name} page`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
