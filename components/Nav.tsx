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
import { UserAvatar } from "./UserAvatar";

export default function Nav({ className }: ComponentProps<"nav">) {
  return (
    <nav className={cn("w-full ", className)}>
      <ul className="flex flex-wrap items-center gap-x-6 text-foreground text-xl py-4">
        <li className=" ">
          <Link href={"/app"} className="inline-flex gap-1 font-semibold ">
            <Logo className="size-6" /> BirthdayReminder
          </Link>
        </li>
        {/* <li className=" hidden md:flex ">
          <Link href={"/app"}>Contacts</Link>
        </li> */}
        <li className=" hidden md:flex ">
          <Link href={"/app/settings/notifications"}>Notifications</Link>
        </li>

        <li className="hidden md:flex ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <UserAvatar alt="user image" username="Torkel" image={""} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link className="w-full" href={"/app/profile"}>
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="w-full" href={"/app/settings"}>
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className="block md:hidden ml-auto ">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Menu className="size-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link className="w-full" href={"/app/settings/notifications"}>
                  Notifications
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <Link className="w-full" href={"/app/settings"}>
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="w-full" href={"/app/profile"}>
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
}
