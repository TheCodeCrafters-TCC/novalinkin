// utils/slugify.ts
export function slugify(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  return fullName
    .toLowerCase() // Convert to lowercase
    .trim() // Trim any whitespace at the start and end
    .replace(/[^\w\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-"); // Replace multiple hyphens with a single hyphen
}

// function slugify(firstName, lastName) {
//   return `${firstName}-${lastName}`.toLowerCase().replace(/[^a-z0-9]+/g, '-');
// }
