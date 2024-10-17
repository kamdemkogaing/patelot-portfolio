import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      {...props}
      className={cn(
        "bg-accent/70 hover:bg-accent/50 transition-colors font-mono border border-accent text-primary p-1 rounded-md m-1",
        className
      )}
    ></span>
  );
};
