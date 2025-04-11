"use client";
import { ComponentProps, useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";
import { DateSelect } from "./DateSelect";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function ContantForm({ className }: ComponentProps<"div">) {
  const [includeYear, setIncludeYear] = useState(false);

  return (
    <form className="space-y-4 md:space-y-6 mb-10">
      <p className="font-semibold mb-4 ">Contact Details</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" grid gap-2">
          <Label htmlFor="firstname">First name</Label>
          <Input type="text" name="firstname" />
        </div>
        <div className="md:col-start-2 grid gap-2">
          <Label htmlFor="firstname">Last name</Label>
          <Input type="text" name="lastname" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-start-1 col-end-2">
          <Label className="pb-2">Date of birth</Label>
          <div className="grid grid-cols-3 gap-x-2">
            <Select defaultValue="01" name="day">
              <SelectTrigger className="col-start-1 w-full">
                <SelectValue placeholder="Day" />
              </SelectTrigger>
              <SelectContent>
                <DateSelect.Days />
              </SelectContent>
            </Select>
            <Select defaultValue="1">
              <SelectTrigger className="col-start-2 w-full">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <DateSelect.Months />
              </SelectContent>
            </Select>
            {includeYear && (
              <Select>
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
                onCheckedChange={() =>
                  setIncludeYear((prevValue) => !prevValue)
                }
              />
              <p className="ml-2 text-sm text-muted-foreground">Include year</p>
            </div>
          </div>
        </div>
      </div>

      <Button>Create Contact</Button>
      <Separator />
    </form>
  );
}
