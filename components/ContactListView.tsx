"use client";
import { cn } from "@/lib/utils";
import { Contact, Contacts } from "@/types/contact";
import { Divide, EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DateSelect } from "./DateSelect";

type ContantListViewProps = ComponentProps<"div"> & {
  contacts: Contacts | null;
};
export default function ContantListView({
  contacts,
  className,
  ...props
}: ContantListViewProps) {
  const contactList: Contacts = [
    {
      id: "1",
      firstname: "Torkel",
      lastname: "Aannestad",
      dateOfBirth: "25.06.1992",
    },
    {
      id: "2",
      firstname: "Katrine",
      lastname: "Eliassen",
      dateOfBirth: "17.04.1992",
    },
    {
      id: "3",
      firstname: "Harald",
      lastname: "Aannestad",
      dateOfBirth: "19.11.1985",
    },
    {
      id: "4",
      firstname: "Magnus",
      lastname: "Aannestad",
      dateOfBirth: "04.07.1981",
    },
  ];
  contacts = contactList;

  return (
    <div className={cn("mb-10", className)} {...props}>
      <div className="grid grid-cols-2 border-b pb-4">
        <div className="col-start-1 col-end-2 ">
          <Link
            className={cn(buttonVariants(), "")}
            href="/app/contacts/create"
          >
            Create Contact
          </Link>
        </div>
        <div className="col-start-2 flex justify-end gap-4">
          <Select name="sort">
            <SelectTrigger>
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="by-date">By date</SelectItem>
            </SelectContent>
          </Select>
          <div>
            <Input className="" placeholder="Search" />
          </div>
        </div>
      </div>
      {contacts && (
        <div className="grid grid-cols-1">
          {contacts.map((contact) => {
            return <ContactCard key={contact.id} {...contact} />;
          })}
        </div>
      )}
      {!contacts && <div>empty state here</div>}
    </div>
  );
}

function ContactCard({ id, firstname, lastname, dateOfBirth }: Contact) {
  return (
    <article className="grid grid-cols-[3fr_1fr] grid-rows-2  py-4 border-b">
      <div className="col-start-1 col-end-2 font-semibold text-lg">
        {firstname} {lastname}
      </div>
      <div className="col-start-1 col-end-2 text-muted-foreground">
        {dateOfBirth}
      </div>
      <div className="row-start-1 row-end-3 col-start-2 col-end-3 ml-auto mt-auto mb-auto">
        <div className="hidden md:inline-flex ">
          <Link
            href={`/appd/contacts/${id}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "default" })
            )}
          >
            View details
          </Link>{" "}
        </div>
        <div className="block md:hidden ml-auto mt-auto mb-auto">
          <Link
            href={`/app/contacts/${id}`}
            className={cn(buttonVariants({ variant: "link", size: "sm" }))}
          >
            View details
          </Link>{" "}
        </div>
      </div>
    </article>
  );
}
