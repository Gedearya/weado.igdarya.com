import * as React from "react";
import { cn } from "@/lib/utils";

type RadioGroupProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
};

type RadioGroupItemProps = {
  value: string;
  id?: string;
  className?: string;
  disabled?: boolean;
};

const RadioGroupContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
}>({});

export function RadioGroup({
  value,
  defaultValue,
  onValueChange,
  className,
  children,
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
  const currentValue = value ?? internalValue;

  const handleChange = (newValue: string) => {
    setInternalValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <RadioGroupContext.Provider
      value={{ value: currentValue, onValueChange: handleChange }}
    >
      <div className={cn("grid gap-2", className)}>{children}</div>
    </RadioGroupContext.Provider>
  );
}

export function RadioGroupItem({
  value,
  id,
  className,
  disabled,
}: RadioGroupItemProps) {
  const context = React.useContext(RadioGroupContext);
  const checked = context.value === value;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      id={id}
      disabled={disabled}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      onClick={() => context.onValueChange?.(value)}
    >
      {checked && (
        <span className="flex items-center justify-center">
          <span className="h-2 w-2 rounded-full bg-primary" />
        </span>
      )}
    </button>
  );
}
