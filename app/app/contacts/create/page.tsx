import PageHeader from "@/components/PageHeader";
import ContantForm from "./_components/ContactFormCreate";

export default function ContactCreate() {
  return (
    <div className="">
      <PageHeader title="Create Contact" subTitle="Add a new contact" />
      <ContantForm />
    </div>
  );
}
