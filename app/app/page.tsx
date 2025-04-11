import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="row-start-2 row-end-3 py-52">
      <h1 className="mb-4">Main app</h1>
      <Link href={"/app/contacts/create"}>
        <Button>New Contact</Button>
      </Link>
    </main>
  );
}
