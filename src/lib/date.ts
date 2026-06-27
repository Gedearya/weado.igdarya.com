import { isToday, isTomorrow, format } from "date-fns";

export function formatDueDate(date: string, time?: string): string {
  const d = new Date(date);
  const dayLabel = isToday(d)
    ? "Today"
    : isTomorrow(d)
      ? "Tomorrow"
      : format(d, "EEE d");

  return time ? `${dayLabel} · ${time}` : dayLabel;
}
