"use client";

import { ComponentProps, useActionState, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { DateSelect } from "@/components/DateSelect";
import { Separator } from "@/components/ui/separator";
import SubmitButton from "@/components/SubmitButton";
import {
  ContactSchemaType,
  ContactSchemaErrorType,
} from "@/validations/contactSchema";
import { createContact } from "@/data/actions/contacts";

export default function ContantForm({ className }: ComponentProps<"div">) {
  const [includeYear, setIncludeYear] = useState(false);

  const initialState = {
    data: {
      firstname: "",
      lastname: "",
      day: "01",
      month: "01",
      year: "1992",
    } as ContactSchemaType,
    errors: null,
  };

  const [state, formAction, isPending] = useActionState(
    createContact,
    initialState
  );

  if (state.errors === undefined) {
    return <div>erroros undefined</div>;
  }

  return (
    <form action={formAction} className="space-y-4 md:space-y-6 mb-10">
      <h3 className="font-semibold mb-4 ">Contact Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" grid gap-2">
          <Label htmlFor="firstname">First name</Label>
          <Input
            type="text"
            name="firstname"
            defaultValue={state?.data?.firstname}
          />
        </div>
        <div className="md:col-start-2 grid gap-2">
          <Label htmlFor="lastname">Last name</Label>
          <Input
            type="text"
            name="lastname"
            defaultValue={state?.data?.lastname}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-start-1 col-end-2">
          <Label className="pb-2">Date of birth</Label>
          <div className="grid grid-cols-3 gap-x-2">
            <Select defaultValue={state?.data?.day} name="day">
              <SelectTrigger className="col-start-1 w-full">
                <SelectValue placeholder="Day" />
              </SelectTrigger>
              <SelectContent>
                <DateSelect.Days />
              </SelectContent>
            </Select>
            <Select defaultValue={state?.data?.month} name="month">
              <SelectTrigger className="col-start-2 w-full">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <DateSelect.Months />
              </SelectContent>
            </Select>
            {includeYear && (
              <Select defaultValue={state?.data?.year} name="year">
                <SelectTrigger className="col-start-3 w-full">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <DateSelect.Years />
                </SelectContent>
              </Select>
            )}
            <div className="col-span-2 flex items-center py-2 ">
              <Checkbox
                defaultChecked={false}
                onCheckedChange={() =>
                  setIncludeYear((prevValue) => !prevValue)
                }
              />
              <p className="ml-2 text-sm text-muted-foreground">Include year</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-2">
        {state.errors?.errors &&
          state.errors.errors.map((error) => {
            return <p className="text-destructive">{error}</p>;
          })}
      </div>

      <div className="grid gap-2">
        <p className="text-primary">
          {state.errors?.properties?.firstname?.errors}
        </p>
        <p className="text-primary">
          {state.errors?.properties?.lastname?.errors}
        </p>
        <p className="text-primary">{state.errors?.properties?.day?.errors}</p>
        <p className="text-primary">
          {state.errors?.properties?.month?.errors}
        </p>
        <p className="text-primary">{state.errors?.properties?.year?.errors}</p>
      </div>

      {state?.data && (
        <div className="grid gap-2">
          <p>Firstname: {state?.data?.firstname}</p>
          <p>Last: {state?.data?.lastname}</p>
          <p>Day: {state?.data?.day}</p>
          <p>Month: {state?.data?.month}</p>
          <p>Year: {state?.data?.year}</p>
        </div>
      )}

      <SubmitButton isPending={isPending}>Create contact</SubmitButton>
      <Separator />
    </form>
  );
}
