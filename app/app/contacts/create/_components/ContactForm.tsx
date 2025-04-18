"use client";

import { ComponentProps, useActionState, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectLabel,
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
import { cn } from "@/lib/utils";

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

  return (
    <form action={formAction} className="space-y-4 md:space-y-6 mb-10">
      <h3 className="font-semibold mb-4 ">Contact Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" flex flex-col gap-2">
          <Label htmlFor="firstname">First name</Label>
          <Input
            type="text"
            name="firstname"
            defaultValue={state?.data?.firstname}
          />
          <span className="text-destructive">
            {state?.errors?.properties?.firstname?.errors[0]}
          </span>
        </div>
        <div className="md:col-start-2 flex flex-col gap-2">
          <Label htmlFor="lastname">Last name</Label>
          <Input
            type="text"
            name="lastname"
            defaultValue={state?.data?.lastname}
          />
          <span className="text-destructive">
            {state?.errors?.properties?.lastname?.errors[0]}
          </span>
        </div>
      </div>
      <div className=" ">
        <Label className="pb-2">Date of birth</Label>
        <div className="grid grid-cols-4 gap-x-4">
          <div className="w-full">
            <Select name="day">
              <SelectTrigger className="col-start-1 w-full">
                <SelectValue placeholder="Day" />
              </SelectTrigger>
              <SelectContent>
                <DateSelect.Days />
              </SelectContent>
              <span className="text-destructive">
                {state?.errors?.properties?.day?.errors[0]}
              </span>
            </Select>
          </div>
          <div className="w-full">
            <Select name="month">
              <SelectTrigger className="col-start-2 w-full">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <DateSelect.Months />
              </SelectContent>
              <span className="text-destructive">
                {state?.errors?.properties?.month?.errors[0]}
              </span>
            </Select>
          </div>
          {includeYear && (
            <div className="w-full">
              <Select name="year">
                <SelectTrigger className="col-start-3 w-full">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <DateSelect.Years />
                </SelectContent>
                <span className="text-destructive">
                  {state?.errors?.properties?.year?.errors[0]}
                </span>
              </Select>
            </div>
          )}
        </div>
        <div className=" flex items-center py-2 ">
          <Checkbox
            defaultChecked={false}
            onCheckedChange={() => setIncludeYear((prevValue) => !prevValue)}
          />
          <p className="ml-2 text-sm text-muted-foreground">Include year</p>
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
