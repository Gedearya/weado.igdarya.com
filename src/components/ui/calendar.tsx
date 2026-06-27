import * as React from "react";
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  return (
    <Button
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected={modifiers.selected || undefined}
      data-today={modifiers.today || undefined}
      data-disabled={modifiers.disabled || undefined}
      data-outside={modifiers.outside || undefined}
      data-range-start={modifiers.range_start || undefined}
      data-range-end={modifiers.range_end || undefined}
      data-range-middle={modifiers.range_middle || undefined}
      className={cn(
        "size-(--cell-size) rounded-md p-0 text-sm font-normal aria-selected:opacity-100",
        "data-[today=true]:bg-accent data-[today=true]:text-accent-foreground",
        "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground data-[selected=true]:hover:bg-primary data-[selected=true]:hover:text-primary-foreground",
        "data-[disabled=true]:text-muted-foreground data-[disabled=true]:opacity-50",
        "data-[outside=true]:text-muted-foreground data-[outside=true]:opacity-50",
        "hover:bg-accent hover:text-accent-foreground",
        className,
      )}
      {...props}
    />
  );
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("bg-background p-3 [--cell-size:--spacing(8)]", className)}
      captionLayout={captionLayout}
      classNames={{
        ...classNames,
        months: cn(
          "flex flex-col gap-4 sm:flex-row relative",
          classNames?.months,
        ),
        month: cn("flex flex-col gap-4", classNames?.month),
        month_caption: cn(
          "flex items-center justify-center h-7 relative",
          classNames?.month_caption,
        ),
        caption_label: cn(
          "text-sm font-medium truncate",
          classNames?.caption_label,
        ),
        nav: cn(
          "flex items-center gap-1 absolute inset-x-0 justify-between",
          classNames?.nav,
        ),
        month_grid: cn("mx-auto", classNames?.month_grid),
        weekdays: cn("flex", classNames?.weekdays),
        weekday: cn(
          "text-muted-foreground text-xs font-medium size-(--cell-size) flex items-center justify-center",
          classNames?.weekday,
        ),
        week: cn("flex mt-1", classNames?.week),
        day: cn(
          "flex items-center justify-center size-(--cell-size) text-center text-sm p-0 relative",
          classNames?.day,
        ),
        today: cn(defaultClassNames.today, classNames?.today),
        selected: cn(defaultClassNames.selected, classNames?.selected),
        outside: cn(defaultClassNames.outside, classNames?.outside),
        disabled: cn(defaultClassNames.disabled, classNames?.disabled),
        hidden: cn("invisible", classNames?.hidden),
      }}
      components={{
        DayButton: CalendarDayButton,
        Chevron: ({ orientation }) => {
          if (orientation === "left") {
            return <ChevronLeft className="size-4" />;
          }
          return <ChevronRight className="size-4" />;
        },
        Nav: ({ className: navClassName, children, ...navProps }) => (
          <nav
            className={cn(
              "flex items-center gap-1 absolute inset-x-0 justify-between",
              navClassName,
            )}
            {...navProps}
          >
            {children}
          </nav>
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
