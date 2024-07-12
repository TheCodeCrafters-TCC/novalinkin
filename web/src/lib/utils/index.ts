import { differenceInDays, format, formatDistanceToNow } from "date-fns";

export function formatDate(createdAt: Date) {
  if (createdAt) {
    const formattedDate = format(createdAt, "MMMM, yyyy");

    return formattedDate;
  } else {
    console.log("Still fetching...");
  }
}

export function formatTimestamp(createdAt: Date | string, form_at?: string) {
  const defaultFormat = "dd/MM";
  const formmatted = form_at ? form_at : defaultFormat;
  const now = new Date();
  const createdDate = new Date(createdAt);

  // Determine the age of the timestamp in days
  const ageInDays = differenceInDays(now, createdDate);

  // If the timestamp is older than 7 days, show the formatted date
  if (ageInDays > 7) {
    return format(createdDate, formmatted); // Adjust the date format as needed
  } else {
    // If the timestamp is within the last 7 days, show "time ago"
    return formatDistanceToNow(createdDate, { addSuffix: true })
      .replace(/^about/, "")
      .replace(/hours?/, "hr")
      .replace(/ago?/, "");
  }
}
