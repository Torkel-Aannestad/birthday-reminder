import TopSection from "@/components/PageHeader";
import ContantForm from "./_components/ContactForm";

export default function ContactCreate() {
  return (
    <div className="">
      <TopSection title="Create Contact" subTitle="Add a new contact" />
      <ContantForm />
    </div>
  );
}
