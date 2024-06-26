import * as React from "react";
import { Reactive } from "@legendapp/state/react";
import { cn } from "@/lib/utils";
import { ObservablePrimitiveChildFns } from "@legendapp/state";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  $value: ObservablePrimitiveChildFns<string>;
}

const CInput = ({ className, $value, ...props }: InputProps) => {
  return (
    <Reactive.input
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      $value={$value}
      {...props}
    />
  );
};

CInput.displayName = "CInput";

export { CInput };