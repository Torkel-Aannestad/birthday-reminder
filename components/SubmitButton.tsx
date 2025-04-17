import { ComponentProps, useActionState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
type SubmitButtonProps = ComponentProps<"button"> & {
  isPending: boolean;
};
export default function SubmitButton({
  isPending,
  className,
  ...props
}: SubmitButtonProps) {
  return isPending ? (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  ) : (
    <Button className={cn("", className)} {...props} />
  );
}
