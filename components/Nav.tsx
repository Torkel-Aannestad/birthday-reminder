import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Logo } from "./Icons";
import { Menu } from "lucide-react";

export default function Nav({ className }: ComponentProps<"nav">) {
  return (
    <nav className={cn("w-full ", className)}>
      <ul className="flex flex-wrap items-center gap-x-6 text-foreground text-xl py-4">
        <li className=" mr-auto">
          <Link href={"/app"} className="inline-flex gap-1 font-semibold ">
            <Logo /> BirthdayReminder
          </Link>
        </li>
        <li className=" hidden md:flex ">
          <Link href={"/app"}>Contacts</Link>
        </li>
        <li className=" hidden md:flex ">
          <Link href={"/app"}>Notifications</Link>
        </li>
        <li className="hidden md:flex ml-auto ">
          <Link href={"/app"}>Settings</Link>
        </li>
        <li className="hidden md:flex ">
          <Link href={"/app"}>Profile</Link>
        </li>
        <li className="block md:hidden ml-auto ">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Menu className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem>Contacts</DropdownMenuItem>
              <DropdownMenuItem>Notifications</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
}
