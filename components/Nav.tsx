import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

export default function Nav({ className }: ComponentProps<"nav">) {
  return (
    <nav className={cn("w-full ", className)}>
      <ul className="flex items-center gap-6 text-foreground text-xl">
        <li className=" py-4">
          <Link href={"/app"} className="inline-flex gap-1 font-semibold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              ></line>
              <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              ></line>
            </svg>{" "}
            BirthdayReminder
          </Link>
        </li>
        <li className=" py-4">
          <Link href={"/app"}>Contacts</Link>
        </li>
        <li className=" py-4">
          <Link href={"/app"}>Notifications</Link>
        </li>
        <li className="ml-auto py-4">
          <Link href={"/app"}>Settings</Link>
        </li>
        <li className="py-4">
          <Link href={"/app"}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
