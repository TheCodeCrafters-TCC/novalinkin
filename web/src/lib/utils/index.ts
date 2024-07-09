import { format } from "date-fns";

export function formatDate(createdAt: Date) {
  if (createdAt) {
    const formattedDate = format(createdAt, "MMMM, yyyy");

    return formattedDate;
  } else {
    console.log("Still fetching...");
  }
}
