// utils/slugify.ts
export function slugify(text) {
  const fullName = `${text}`;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const length = 10; // Length of the random string
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return (
    fullName
      .toLowerCase() // Convert to lowercase
      .trim() // Trim any whitespace at the start and end
      .replace(/[^\w\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-") +
    "-" +
    result
  ); // Replace multiple hyphens with a single hyphen
}

// function slugify(firstName, lastName) {
//   return `${firstName}-${lastName}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
// }

export function genHash() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const length = 10; // Length of the random string
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
