import { ComponentProps } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type UserAvatarProps = ComponentProps<"div"> & {
  image: string;
  username: string;
  alt: string;
};

export function UserAvatar({
  image,
  username,
  alt = "user avatar",
  className,
  ...props
}: UserAvatarProps) {
  //   get user image from api
  const src = null;
  const initial = username ? username[0].toUpperCase() : "O";

  if (!src) {
    return (
      <div
        className={cn(
          "flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition duration-250",
          className
        )}
        {...props}
      >
        <div className="grid size-full place-items-center font-semibold">
          {initial}
        </div>
      </div>
    );
  }

  return (
    <div className="size-10 rounded-full bg-muted relative">
      <Image
        className={cn(
          "size-full rounded-full bg-muted object-cover",
          className
        )}
        src={src}
        alt={alt}
        unoptimized
        fill
      />
    </div>
  );
}
