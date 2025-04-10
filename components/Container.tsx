import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "max-2xl:max-w-7xl",
        "px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-32 mx-auto ",
        className
      )}
      {...props}
    />
  );
}

export function ContainerWithSpacing({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "max-2xl:max-w-7xl",
        "px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-32 mx-auto ",
        "mt-4 md:mt-8 xl:mt-12 space-y-4 md:space-y-8 xl:space-y-12",
        className
      )}
      {...props}
    />
  );
}
