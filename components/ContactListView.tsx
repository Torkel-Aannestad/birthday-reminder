import { cn } from "@/lib/utils";
import { Contacts } from "@/types/contact";
import { Divide } from "lucide-react";
import { ComponentProps } from "react";

type ContantListViewProps = ComponentProps<"div"> & {
  contacts: Contacts | null;
};
export default function ContantListView({
  contacts,
  className,
  ...props
}: ContantListViewProps) {
  return (
    <div className={cn("", className)} {...props}>
      list view
      {contacts && <div>many contacts here</div>}
      {!contacts && <div>empty state here</div>}
    </div>
  );
}
