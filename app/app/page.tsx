import TopSection from "@/components/PageHeader";
import ContantListView from "@/components/ContactListView";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="row-start-2 row-end-3">
      <TopSection title="Contacts" subTitle=""></TopSection>
      <ContantListView contacts={null} />
    </main>
  );
}
