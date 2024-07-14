import { differenceInDays, format, formatDistanceToNow } from "date-fns";
import { onToast } from "../components/ToastContainer";

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

export function copyToClip(item: string | any, extra?: string) {
  navigator.clipboard
    .writeText(item)
    .then(() => {
      onToast("info", `${extra ? extra : ""} Copied!`);
    })
    .catch((err) => {
      onToast("error", "Failed to copy!");
    });
}

export async function handleShare(title: string, text: string, url: string) {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      });
      console.log("Content shared successfully");
      onToast("info", "You shared article");
    } catch (error) {
      console.error("Error sharing content: ", error);
    }
  } else {
    console.error("Web Share API not supported in this browser");
  }
}
