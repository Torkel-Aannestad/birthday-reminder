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
    <Container className="grid grid-rows-[auto_1fr_40px] ">
      <Nav className="row-span-1" />
      {children}
      <footer className="">footer</footer>
    </Container>
  );
}
