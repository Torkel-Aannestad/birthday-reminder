import * as z from "zod";

export type Contact = {
  id: string;
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  day: string;
  month: string;
  year: string;
};
export type Contacts = Contact[];
