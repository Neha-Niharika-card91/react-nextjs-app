import Link from "next/link";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/counter">Go to Counter</Link>
    </div>
  );
}
