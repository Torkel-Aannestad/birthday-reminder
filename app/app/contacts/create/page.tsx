import TopSection from "@/components/PageHeader";
import ContantForm from "@/app/app/contacts/create/_components/ContactForm";

export default function ContactCreate() {
  return (
    <div className="">
      <TopSection title="Create Contact" subTitle="Add a new contact" />
      <ContantForm />
    </div>
  );
}
