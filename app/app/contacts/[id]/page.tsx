import PageHeader from "@/components/PageHeader";
import ContantFormViewEdit from "./_components/ContactFormViewEdit";
import { Contact } from "@/types/contact";

export default function ContactDetails() {
  //get contact from id
  const contact: Contact = {
    id: "10",
    firstname: "Torkel",
    lastname: "Aannestad",
    day: "25",
    month: "06",
    year: "1992",
    dateOfBirth: "25.06.1992",
  };
  return (
    <div className="">
      <PageHeader title={`Contact`} />
      <ContantFormViewEdit contact={contact} />
    </div>
  );
}
