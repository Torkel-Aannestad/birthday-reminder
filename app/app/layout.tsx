import { Container } from "@/components/Container";
import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App page",
  description: "",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Container>
        <Nav />
      </Container>
      {children}
    </div>
  );
}
