import TopSection from "@/components/CommonTopSection";
import ContantListView from "@/components/ContactListView";

export default function Contacts() {
  return (
    <div>
      <TopSection title="Create Contact" subTitle="Add a new contact" />
      <ContantListView contacts={null} />
    </div>
  );
}
