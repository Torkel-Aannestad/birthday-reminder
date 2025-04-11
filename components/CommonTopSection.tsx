import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Separator } from "./ui/separator";

type TopSectionProps = ComponentProps<"div"> & {
  title: string;
  subTitle?: string;
};

export default function TopSection({
  title,
  subTitle,
  className,
  children,
}: TopSectionProps) {
  return (
    <div className={cn("my-6 md:my-10  space-y-2 md:space-y-4", className)}>
      <h1 className="text-2xl md:text-4xl font-semibold text-foreground">
        {title}
      </h1>
      {subTitle && <p className="text-muted-foreground">{subTitle}</p>}
      {children}
      <Separator />
    </div>
  );
}
